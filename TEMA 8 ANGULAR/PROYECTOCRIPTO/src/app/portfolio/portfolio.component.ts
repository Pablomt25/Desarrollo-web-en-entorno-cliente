import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SeleccionService } from '../seleccion.service';
import { PeticionesAJAXService } from '../peticiones-ajax.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  criptomonedas: any[] = [];
  criptomonedasSeguidas: any[] = [];
  user: any;

  constructor(
    private ajax: PeticionesAJAXService,
    private router: Router,
    private seleccionService: SeleccionService
  ) {}

  ngOnInit() {
    this.ajax.peticionAjax();
    this.ajax.datosAPI$.subscribe((datos: any[]) => {
      this.criptomonedas = datos;
    });

    this.seleccionService.criptomonedasSeleccionadas$.subscribe((seleccion: any[]) => {
      this.criptomonedasSeguidas = seleccion;
    });
  }

  navegarADetalle(id: string): void {
    this.router.navigate(['/detalle', id]);
  }

  esCriptomonedaSeguida(criptomoneda: any): boolean {
    return this.criptomonedasSeguidas.some(c => c.id === criptomoneda.id);
  }

  seguirCriptomoneda(criptomoneda: any): void {
    this.criptomonedasSeguidas.push(criptomoneda);
    this.seleccionService.guardarSeleccion(this.criptomonedasSeguidas);
  }

  dejarDeSeguirCriptomoneda(criptomoneda: any): void {
    this.criptomonedasSeguidas = this.criptomonedasSeguidas.filter(c => c.id !== criptomoneda.id);
    this.seleccionService.guardarSeleccion(this.criptomonedasSeguidas);
  }
}
