// monedas.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeticionesAJAXService } from '../peticiones-ajax.service';
import { Router, RouterModule } from '@angular/router';
import { SeleccionService } from '../seleccion.service';

@Component({
  selector: 'app-monedas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css']
})
export class MonedasComponent implements OnInit {
  criptomonedasSeleccionadas: any[] = [];

  constructor(private seleccionService: SeleccionService, private router: Router, private ajax: PeticionesAJAXService) {}

  ngOnInit() {
    this.seleccionService.obtenerSeleccion().subscribe((seleccion: any[]) => {
      this.criptomonedasSeleccionadas = seleccion;
    });
  }

  dejarDeSeguir(id: string): void {
    this.criptomonedasSeleccionadas = this.criptomonedasSeleccionadas.filter(cripto => cripto.id !== id);
    this.seleccionService.guardarSeleccion(this.criptomonedasSeleccionadas);
  }

  mostrarDetalle(id: string): void {
    this.router.navigate(['/detalle', id]);
}
}
