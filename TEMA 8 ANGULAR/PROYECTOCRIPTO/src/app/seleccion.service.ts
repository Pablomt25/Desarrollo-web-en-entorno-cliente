// seleccion.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeleccionService {
  private criptomonedasSeleccionadasSubject = new BehaviorSubject<any[]>([]);
  criptomonedasSeleccionadas$: Observable<any[]> = this.criptomonedasSeleccionadasSubject.asObservable();

  private localStorageKey = 'criptomonedasSeleccionadas';

  constructor() {
    const savedSelection = localStorage.getItem(this.localStorageKey);
    if (savedSelection) {
      this.criptomonedasSeleccionadasSubject.next(JSON.parse(savedSelection));
    }
  }

  guardarSeleccion(criptomonedas: any[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(criptomonedas));
    this.criptomonedasSeleccionadasSubject.next(criptomonedas);
  }

  obtenerSeleccion(): Observable<any[]> {
    return this.criptomonedasSeleccionadas$;
  }

  obtenerSeleccionSync(): any[] {
    return this.criptomonedasSeleccionadasSubject.getValue();
  }
}
