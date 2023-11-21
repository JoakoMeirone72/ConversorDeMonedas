import { Injectable } from '@angular/core';
import { API } from '../constants/api';
import { ApiService } from './api.service';
import { Moneda } from '../interfaces/Moneda';

@Injectable({
  providedIn: 'root'
})
export class ViewService extends ApiService {

  async cambiarSub(sub:Number):Promise<boolean>{
    const url = `${API}View/CambiarSub?sub=${sub}`;
    const res = await fetch(url, 
      {
        method:'PUT',
        headers:{
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token()
      }
      })
      return res.ok
  };

  async verSub():Promise<string>{
    const res = (await this.getAuth("View/VerSub")).text();
    return res;
  };

  async verTotalConversiones():Promise<string>{
    const res = (await this.getAuth("View/VerTotalConversiones")).text();
    return res;
  }

  async verMonedas(endpoint:string):Promise<Moneda[]>{
    const res = await this.getAuth("View/VerMonedas"+endpoint);
    const resJson = await res.json();
    return resJson;
  }

  async getById(id:number):Promise<Moneda | undefined>{
    const res = await this.getAuth(`View/VerMonedaUserById?CoinId=${id}`);
    const resJson = await res.json();
    return resJson[0];
  };
}
