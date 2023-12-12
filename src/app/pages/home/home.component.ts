import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Moneda } from 'src/app/interfaces/Moneda';
import { AuthService } from 'src/app/services/auth.service';
import { CoinsService } from 'src/app/services/coins.service';
import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  viewService = inject(ViewService);
  coinsService = inject(CoinsService);
  router = inject(Router)
  auth = inject(AuthService)
  
  //sub + total conversiones + monedas
  
  MostrarSub: string = "";
  MostrarConversiones: string = "";
  MonedasFavoritas:Moneda[] = []
  MonedasUsuario:Moneda[] = []
  MonedasDefault:Moneda[] = []
  
  ngOnInit(): void {
    this.viewService.verSub().then(res => {
      this.MostrarSub = res;
    })
    this.verTotalConversionesHome() //creo una funcion por fuera para poder llamarla luego en Convertir()

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

  verTotalConversionesHome(){
    this.viewService.verTotalConversiones().then(res => {
      if(res < "0"){
        this.MostrarConversiones = "ilimitadas"
      }else{
        this.MostrarConversiones = res;
      }
    })
  }

  //input número

  inputValue: number = 0;

  updateValue(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.inputValue = parseFloat(value);
  }

 //función desplegable + opcion elegida

  isDropdownOpen1: boolean = false;
  isDropdownOpen2: boolean = false;
  selectedOption1: string = 'Moneda 1';
  selectedOption2: string = 'Moneda 2';
  ICfromConvert: number = 0;
  ICtoConvert: number = 0;

  toggleDropdown1() {
    this.isDropdownOpen1 = !this.isDropdownOpen1;
    if (this.isDropdownOpen2 = true){
      this.isDropdownOpen2 = false
    }
  }

  toggleDropdown2() {
    this.isDropdownOpen2 = !this.isDropdownOpen2;
    if (this.isDropdownOpen1 = true){
      this.isDropdownOpen1 = false
    }
  }

  selectOption1(monedaselect: Moneda) {
    this.selectedOption1 = monedaselect.simbolo;
    this.ICfromConvert = monedaselect.ic
    this.isDropdownOpen1 = true;
  }

  selectOption2(monedaselect: Moneda) {
    this.selectedOption2 = monedaselect.simbolo;
    this.ICtoConvert = monedaselect.ic
    this.isDropdownOpen2 = true;
  }

  //Funcion Convertir

  resultado:number = 0; 

  async Convertir(amount: number, ICfromConvert:number, ICtoConvert:number){
    const res = await this.coinsService.convert(amount, ICfromConvert, ICtoConvert)
      const resultNumber = parseFloat(res);
      if(resultNumber == -1){
        this.router.navigate(['/endfree'])
      } else if (resultNumber == -2){
        this.router.navigate(['/home'])
      } else{
        this.resultado = parseFloat(resultNumber.toFixed(3))
        this.verTotalConversionesHome()
      }
  }

  //logout

  Logout(){
    this.auth.logOut()
  }
}
