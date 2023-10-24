import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Moneda } from 'src/app/interfaces/Moneda';

@Component({
  selector: 'app-card-coin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-coin.component.html',
  styleUrls: ['./card-coin.component.scss']
})
export class CardCoinComponent {
  @Input({required:true}) moneda!:Moneda;
}
