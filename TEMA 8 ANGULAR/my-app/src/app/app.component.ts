import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'hola';
  nombre = 'Pablo';
  urlImagen = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';

  ngOnInit(){
    console.log('Se inicia el componente')
  }

  cambiarTitulo(){
    this.title = 'Pablo vacalis'
  }

  pulsadaTecla(){
    console.log("HAs pulsado una tecla");
    
  }
}
