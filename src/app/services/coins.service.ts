import { Injectable } from '@angular/core';
import { Moneda } from '../interfaces/Moneda';
import { API } from '../constants/api';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CoinsService extends ApiService {

  async convert(amount: number, fromconvert: number, toconvert: number) {
    const url = `${API}Coin/Convertir?amount=${amount}&ICfromConvert=${fromconvert}&ICtoConvert=${toconvert}`;
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + this.auth.token(),
        },
      });
  
      if (!response.ok) {
        console.error('Error en la solicitud');
        return "-2" //numeros negativos son mis "status code" personalizados por asi decirlo 
      }
  
      const resultText = await response.text();
      return resultText;
      
    } catch (error) {
      console.error('Error al realizar la solicitud');
      return "-2"

    }
  }

  async create(moneda:Moneda):Promise<boolean>{
    if(moneda.id) return false;
    const res = await fetch(API+'Coin/CrearMoneda',{
      method:'POST',
      headers:{
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token()
      },
      body: JSON.stringify(moneda)
    })
    return res.ok
  };

  async edit(moneda:Moneda):Promise<boolean>{
    if(!moneda.id) return false;
    const id = moneda.id
    const url = `${API}Coin/EditarMoneda?CoinId=${id}`
    const res = await fetch(url, {
      method: 'PUT',
      headers:{
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token()
      },
      body: JSON.stringify(moneda)
    })
    return res.ok
  };

  async delete(id:number):Promise<boolean>{
    const res = await fetch(API+'Coin/EliminarMoneda/'+ id, {
      method: 'DELETE',
      headers:{
        Authorization: "Bearer "+this.auth.token()
      }
    })
    return res.ok
  };

  async createFav(moneda:Moneda):Promise<boolean>{
    const res = await fetch(API+'Coin/AgregarFavorita',{
      method:'POST',
      headers:{
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token()
      },
      body: JSON.stringify(moneda)
    })
    return res.ok
  };

  async deleteFav(id:number):Promise<boolean>{
    const url = `${API}Coin/EditarMoneda?CoinId=${id}`
    const res = await fetch(url, {
      method: 'DELETE',
      headers:{
        Authorization: "Bearer "+this.auth.token()
      }
    })
    return res.ok
  }
}
