import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moneda } from 'src/app/interfaces/Moneda';
import { ViewService } from 'src/app/services/view.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.scss']
})
export class CoinDetailComponent {

  viewService = inject(ViewService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

  coin : Moneda = {
    id: 0,
    leyenda: '',
    simbolo: '',
    ic: 0
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.viewService.getById(params['id']).then(response => {
        if (response) this.coin = response
      })
    }) 
  }
}
