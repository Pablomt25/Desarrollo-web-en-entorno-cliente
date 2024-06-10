import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeticionesAJAXService } from '../peticiones-ajax.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  ngOnInit() {
    console.log('Se inicia el componente cabecera');
  }

  items:any[] = [];
  contenidoInput = "";
  @Output() lanzadaPeticionEvent = new EventEmitter<string>();
  id_coin="";


  constructor(public ajax:PeticionesAJAXService,private router:Router){

  }

  obtenDatos(){
    this.ajax.peticionAjax();
    this.lanzadaPeticionEvent.emit("Peticion en curso");
  }

  nuevoValor() {
    this.items.push(this.contenidoInput);
    this.contenidoInput = "";
  }

  borrarValor(pos: any) {
    this.items.splice(pos, 1);
  }

  mostrarDetalle(id:any){
    console.log("navegando al detalle del " + id);
    this.router.navigate(["detalle/"+id]);
  }

  
}

  
