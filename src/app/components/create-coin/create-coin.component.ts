import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinsService } from 'src/app/services/coins.service';
import { FormsModule } from '@angular/forms';
import { Moneda } from 'src/app/interfaces/Moneda';
import { Router } from '@angular/router';
import { mensajeError, mensajeOkey } from 'src/app/helpers/mensajes';

@Component({
  selector: 'app-create-coin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-coin.component.html',
  styleUrls: ['./create-coin.component.scss']
})
export class CreateCoinComponent {

  coinsService = inject(CoinsService);
  router = inject(Router);

  @Output() cerrar = new EventEmitter();
  @Input() moneda: Moneda = {
    id: 0,
    leyenda: '',
    simbolo: '',
    ic: 0,
  }

  ngOnInit(): void {
    const mensaje = localStorage.getItem('mensajeOkey');
        if (mensaje) {
          mensajeOkey(mensaje);
          localStorage.removeItem('mensajeOkey');
        }
  };

  onSubmit() {
    this.coinsService.create(this.moneda).then(res => {
      this.cerrar.emit();
      if (res) {
        localStorage.setItem('mensajeOkey', 'Creada correctamente');
        location.reload()
      } else {
        mensajeError('Error creando moneda')
      }
    });
  }
}
