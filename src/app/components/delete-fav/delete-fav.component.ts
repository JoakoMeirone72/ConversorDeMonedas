import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCoinComponent } from "../card-coin/card-coin.component";
import { Moneda } from 'src/app/interfaces/Moneda';
import { CoinsService } from 'src/app/services/coins.service';
import { Router } from '@angular/router';
import { ViewService } from 'src/app/services/view.service';
import { mensajeError, mensajeOkey } from 'src/app/helpers/mensajes';

@Component({
    selector: 'app-delete-fav',
    standalone: true,
    templateUrl: './delete-fav.component.html',
    styleUrls: ['./delete-fav.component.scss'],
    imports: [CommonModule, CardCoinComponent]
})
export class DeleteFavComponent {

    @Output() cerrar = new EventEmitter();
    @Input({ required: false }) moneda!: Moneda;

    router = inject(Router)
    coinsService = inject(CoinsService)

    deleteFav() {
        this.coinsService.deleteFav(this.moneda.id).then(res => {
            this.cerrar.emit()
            if (res) {
                mensajeOkey('Eliminada correctamente')
                this.router.navigate(['/coins'])
            } else {
                mensajeError('Error eliminando moneda favorita')
            }
        })
    }
}
