// peticiones-ajax.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PeticionesAJAXService {
  private datosAPISubject = new Subject<any[]>();
  datosAPI$: Observable<any[]> = this.datosAPISubject.asObservable();

  datosAPI: any[] = [];
  datosDetalle: any;
  datosFS: any[] = [];
  firestore = inject(Firestore);

  constructor(private http: HttpClient) {}

  peticionAjax() {
    this.http
      .get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: '50',
          page: '1',
          sparkline: 'false'
        }
      })
      .subscribe((datos: any) => {
        console.log(datos);
        this.datosAPI = datos;
        this.datosAPISubject.next(this.datosAPI);
      });
  }

  obtenerDetallePorId(id: string): Observable<any> {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    return this.http.get(url);
  }


}
