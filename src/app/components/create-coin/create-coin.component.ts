import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Moneda } from 'src/app/interfaces/Moneda';
import { CoinsService } from 'src/app/services/coins.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-coin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-coin.component.html',
  styleUrls: ['./create-coin.component.scss']
})
export class CreateCoinComponent {
  coinsService = inject(CoinsService);
  @Output() cerrar = new EventEmitter();
  @Input() moneda: Moneda = {
    id: 0,
    leyenda: '',
    simbolo: '',
    ic: ''
  }

  async onSubmit() {
    this.CreateCoin()
  }

  async CreateCoin() {
    const res = await this.coinsService.create(this.moneda);
    this.cerrar.emit();
  }
}
