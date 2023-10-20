import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.scss']
})
export class SubsComponent {
  
  constructor(private dataService: DataService) {}

  EleccionSub(sub: string) {
    this.dataService.SubSelected = sub;
  }
}

