import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeticionesAJAXService } from '../peticiones-ajax.service';
import { Router, RouterModule } from '@angular/router';
import { SeleccionService } from '../seleccion.service';
import { Observable,map } from 'rxjs';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() id: string = "";
  seleccion$: Observable<any[]>;

  constructor(public ajax: PeticionesAJAXService, private router: Router, private seleccionService: SeleccionService) {
    this.seleccion$ = this.seleccionService.criptomonedasSeleccionadas$; 
  }

  ngOnInit(): void {
    this.obtenerDetalle(this.id);
  }

  obtenerDetalle(id: string): void {
    this.ajax.obtenerDetallePorId(id).subscribe((detalle: any) => {
      this.ajax.datosDetalle = detalle;
    });
  }

  obtenerDescripcion(): string {
    if (this.ajax.datosDetalle.description && this.ajax.datosDetalle.description.es) {
      return this.ajax.datosDetalle.description.es;
    } else if (this.ajax.datosDetalle.description && this.ajax.datosDetalle.description.en) {
      return this.ajax.datosDetalle.description.en;
    } else {
      return "Descripción no disponible";
    }
  }

  seguirCriptomoneda(): void {
    this.seleccion$.subscribe((seleccion: any[]) => {
      const criptoActual = this.ajax.datosDetalle;
      const nuevasCriptomonedas = [...seleccion, criptoActual];
      this.seleccionService.guardarSeleccion(nuevasCriptomonedas);
    });
  }

  dejarDeSeguirCriptomoneda(): void {
    this.seleccion$.subscribe((seleccion: any[]) => {
      const criptoActual = this.ajax.datosDetalle;
      const nuevasCriptomonedas = seleccion.filter(cripto => cripto.id !== criptoActual.id);
      this.seleccionService.guardarSeleccion(nuevasCriptomonedas);
    });
  }

  volverAlPortfolio(): void {
    this.router.navigate(["/portfolio"]);
  }

  esCriptomonedaSeguida(): Observable<boolean> {
    const criptoActual = this.ajax.datosDetalle;
  
    return this.seleccion$.pipe(
      map((seleccion: any[]) => seleccion.some(cripto => cripto.id === criptoActual.id))
    );}
}