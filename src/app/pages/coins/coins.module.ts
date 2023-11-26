import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoinsRoutingModule } from './coins-routing.module';
import { CoinsComponent } from './coins.component';
import { CardCoinComponent } from 'src/app/components/card-coin/card-coin.component';
import { CreateCoinComponent } from 'src/app/components/create-coin/create-coin.component';
import { AddFavComponent } from "../../components/add-fav/add-fav.component";
import { DeleteFavComponent } from "../../components/delete-fav/delete-fav.component";


@NgModule({
    declarations: [
        CoinsComponent
    ],
    imports: [
        CommonModule,
        CoinsRoutingModule,
        CardCoinComponent,
        CreateCoinComponent,
        AddFavComponent,
        DeleteFavComponent
    ]
})
export class CoinsModule { }
