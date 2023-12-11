import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Moneda } from 'src/app/interfaces/Moneda';
import { CardCoinComponent } from "../card-coin/card-coin.component";
import { Router } from '@angular/router';
import { CoinsService } from 'src/app/services/coins.service';
import { ViewService } from 'src/app/services/view.service';
import { mensajeError, mensajeOkey } from 'src/app/helpers/mensajes';

@Component({
    selector: 'app-add-fav',
    standalone: true,
    templateUrl: './add-fav.component.html',
    styleUrls: ['./add-fav.component.scss'],
    imports: [CommonModule, CardCoinComponent]
})
export class AddFavComponent {
  
  @Output() cerrar = new EventEmitter();
  @Input({required:false}) moneda!:Moneda;


    router = inject(Router)
    coinsService = inject(CoinsService)
    viewService = inject(ViewService)

    monedafav : Moneda = {
      id: 0,
      leyenda: '',
      simbolo: '',
      ic: 0
    }

    ngOnInit(): void {
        this.getFavByleyenda(this.moneda.leyenda);
        const mensaje = localStorage.getItem('mensajeOkey');
        if (mensaje) {
          mensajeOkey(mensaje);
          localStorage.removeItem('mensajeOkey');
        }
      };

    addFav(){
      this.coinsService.createFav(this.moneda).then(res => {
        this.cerrar.emit()
        if (res) {
          localStorage.setItem('mensajeOkey', 'Agregada como favorita');
          location.reload()
        } else {
          mensajeError('Error agregando moneda favorita')
        }
      })
    }

    async getFavByleyenda(leyenda:string) {
      const res = await this.viewService.getFavByleyenda(leyenda);
      if(res){
        this.monedafav = res
      }
    }
}
