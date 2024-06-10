import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeticionesAJAXService } from '../peticiones-ajax.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  items: any[] = [];
  contenidoInput = "";
  user: any;
  @Output() lanzadaPeticionEvent = new EventEmitter<string>();

  constructor(public authService: AuthService, public ajax: PeticionesAJAXService, private router: Router) {}


  ngOnInit() {
    console.log('Se inicia el componente cabecera');
  }

  obtenDatos() {
    this.ajax.peticionAjax();
    this.lanzadaPeticionEvent.emit("Peticion en curso");
  }


  mostrarDetalle(id: any) {
    console.log("navegando al detalle del " + id);
    this.router.navigate(["detalle/" + id]);
  }

  mostrarDetallePorId(id: string): void {
    console.log("navegando al detalle del " + id);
    this.router.navigate(["detalle/" + id]);
  }


  cerrarSesion() {
    this.authService.cerrarSesion()
      .then(() => {
        console.log("Sesion iniciada")
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error.message);
      });
  }
}

