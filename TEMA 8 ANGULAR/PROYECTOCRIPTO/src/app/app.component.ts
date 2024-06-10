import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DetalleComponent } from './detalle/detalle.component';
import { MonedasComponent } from './monedas/monedas.component';
import { PieComponent } from './pie/pie.component';
import { inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { SeleccionService } from './seleccion.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, CabeceraComponent, DetalleComponent,MonedasComponent,LoginComponent,RegisterComponent,PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit {
  title = 'crypto-tracker';
  firestore = inject(Firestore);
  user: any;

  constructor(private authService: AuthService, private seleccionService: SeleccionService) {}

  
  ngOnInit() {
    getDocs(collection(this.firestore, 'todos')).then((response) => {
      console.log(response.docs);
    });
  }




}
