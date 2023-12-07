import { Component, Input, NgZone, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mensajeError,  mensajeOkey } from 'src/app/helpers/mensajes';
import { Moneda } from 'src/app/interfaces/Moneda';
import { CoinsService } from 'src/app/services/coins.service';
import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {

  viewService = inject(ViewService)
  coinsService = inject(CoinsService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

  moneda : Moneda = {
    id: 0,
    leyenda: '',
    simbolo: '',
    ic: 0
  }

  editMoneda : Moneda = {
    id: 0,
    leyenda: '',
    simbolo: '',
    ic: 0
  }

  monedafav : Moneda= {
    id: 0,
    leyenda: '',
    simbolo: '',
    ic: 0
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseFloat(params['id']);
        this.viewService.getById(id).then(response => {
          if (response) {
            this.moneda = response;
            this.editMoneda = {...response};
          }
          this.getFavByleyenda(this.moneda.leyenda);
        });
      });

    };

    async editCoin() {
      const res = await this.coinsService.edit(this.moneda.leyenda, this.editMoneda);
      if (res) {
        mensajeOkey('Editada correctamente')
        this.router.navigate(['/coins'])
      } else {
        mensajeError('Error editando moneda')
      }
    }

    async deleteCoin() {
      this.activatedRoute.params.subscribe(params => {
        const id = parseFloat(params['id']);
          this.coinsService.delete(id, this.moneda.leyenda).then(response => {
            if (response) {
              mensajeOkey('Eliminada correctamente')
              this.router.navigate(['/coins'])
              } else {
              mensajeError('Error eliminando moneda')
              }
            });
        });
    };

    async createFav() {
      const res = await this.coinsService.createFav(this.moneda);
      if (res) {
        mensajeOkey('Agregada como favorita')
      }
      else {
        mensajeError('Error agregando moneda')
      }
    }

    async getFavByleyenda(leyenda:string) {
      const res = await this.viewService.getFavByleyenda(leyenda);
      if(res){
        this.monedafav = res
      }
    }
  }

