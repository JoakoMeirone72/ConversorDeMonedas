import { Injectable } from '@angular/core';
import { Moneda } from '../interfaces/Moneda';
import { API } from '../constants/api';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  async create(moneda:Moneda):Promise<boolean>{
    const res = await fetch(API+'contactos',{
      method:'POST',
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify(moneda)
    })
    return res.ok
  };
}
