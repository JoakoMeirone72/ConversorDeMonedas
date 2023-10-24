import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-endfree',
  templateUrl: './endfree.component.html',
  styleUrls: ['./endfree.component.scss']
})
export class EndfreeComponent {
  
  constructor(private dataService: DataService) {}

  EleccionSub(sub: string) {
    this.dataService.SubSelected = sub;
  }
}
