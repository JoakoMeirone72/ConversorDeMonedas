import { Component, inject } from '@angular/core';
import { Moneda } from 'src/app/interfaces/Moneda';
import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent {

  viewService = inject(ViewService)
  MonedasFavoritas:Moneda[] = []
  MonedasUsuario:Moneda[] = []
  MonedasDefault:Moneda[] = [] 

  ngOnInit(): void {
    this.viewService.verMonedas('Favoritas').then(res => {
      this.MonedasFavoritas = res;
    })
    this.viewService.verMonedas('Usuario').then(res => {
      this.MonedasUsuario = res;
    })
    this.viewService.verMonedas('Default').then(res => {
      this.MonedasDefault = res;
    })
  }

}
