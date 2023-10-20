import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  MostrarSub: string = "";

  constructor(private dataService: DataService) {
    this.MostrarSub = this.dataService.SubSelected;
}

  isDropdownOpen1: boolean = false;
  isDropdownOpen2: boolean = false;
  selectedOption1: string = 'Moneda 1';
  selectedOption2: string = 'Moneda 2';
  favsoptions: string[] = ['moneda 1', 'moneda 2', 'moneda 3'];
  options: string[] = ['Opción 1', 'Ars$', 'Usd$','Opción 1', 'Opción 2', 'Opción 3','Opción 1', 'Opción 2', 'Opción 3','Opción 1', 'Opción 2', 'Opción 3'];

  toggleDropdown1() {
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }

  toggleDropdown2() {
    this.isDropdownOpen2 = !this.isDropdownOpen2;
  }

  selectOption1(option: string) {
    this.selectedOption1 = option;
    this.isDropdownOpen1 = true;
  }

  selectOption2(option: string) {
    this.selectedOption2 = option;
    this.isDropdownOpen2 = true;
  }
}
