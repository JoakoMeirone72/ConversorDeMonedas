import { Injectable } from '@angular/core';
import { API } from '../constants/api';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ViewService extends ApiService {

  async cambiarSub(sub:Suscripcion):Promise<boolean>{
    const url = `${API}View/CambiarSub?sub=${sub}`;
    const res = await fetch(url, 
      {
        method:'PUT',
      headers:{
        "Content-type":"application/json",
        Authorization: "Bearer "+this.auth.token
      }
      })
      return res.ok
  };

  async verSub():Promise<string>{
    const res = await this.getAuth("Contact")
    const resJson = await res.json();
    return resJson;
  };
}
