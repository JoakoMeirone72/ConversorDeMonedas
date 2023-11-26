import { Component, Input, NgZone, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moneda } from 'src/app/interfaces/Moneda';
import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent implements OnInit {

  viewService = inject(ViewService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

  moneda : Moneda = {
    id: 0,
    leyenda: '',
    simbolo: '',
    ic: 0
  }

  editMoneda : Moneda = {
    id: 0,
    leyenda: '',
    simbolo: '',
    ic: 0
  }

  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseFloat(params['id']);
        this.viewService.getById(id).then(response => {
          if (response) {
            this.moneda = response;
            console.log(this.moneda);
          }
        });
      });
    };
  }

