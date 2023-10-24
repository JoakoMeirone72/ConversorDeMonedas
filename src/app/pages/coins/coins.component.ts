import { Component } from '@angular/core';
import { Moneda } from 'src/app/interfaces/Moneda';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent {

  monedas:Moneda[] = []

}
