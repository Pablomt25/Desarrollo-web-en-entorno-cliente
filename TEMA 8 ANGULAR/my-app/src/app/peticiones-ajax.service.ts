import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeticionesAJAXService {
  datosAPI:any[] = [];
  constructor(private http: HttpClient) { }

  peticionAjax(){
    this.http.get("https://api.coingecko.com/api/v3/coins/list").subscribe((datos:any)=>{
      console.log(datos);
      this.datosAPI = datos;
    })
  }
  
}
