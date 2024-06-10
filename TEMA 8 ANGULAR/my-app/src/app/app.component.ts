import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DetalleComponent } from './detalle/detalle.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, CabeceraComponent, DetalleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit {
  title = 'Pablo';
  nombre = 'Pablo';
  urlImagen = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';

  ngOnInit(){
    console.log('Se inicia el componente')
  }

  cambiarTitulo(){
    this.title = 'Pablo vacalis'
  }

  pulsadaTecla(){
    console.log("Has pulsado una tecla");
    
  }

  trataEventoDeHijo(datoRecibido:string){
    console.log("Salta evento con dato = " + datoRecibido);
  }
}
