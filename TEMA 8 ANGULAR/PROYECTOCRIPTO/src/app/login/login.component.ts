import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMensaje: string = '';
  constructor(private authService: AuthService,private router: Router) {}

  iniciarSesion() {
    this.authService.iniciarSesionEmailPassword(this.email, this.password)
      .then(() => {
        this.router.navigate(['/portfolio']);
      })
      .catch(error => {
        this.errorMensaje = 'Error al iniciar sesión: ' + error.message;
      });
  }

  iniciarSesionGoogle() {
    this.authService.iniciarSesionGoogle()
      .then(() => {
        this.router.navigate(['/portfolio']);
      })
      .catch(error => {
        this.errorMensaje = 'Error al iniciar sesión con Google: ' + error.message;
      });
  }

  iniciarSesionGitHub() {
    this.authService.iniciarSesionGitHub()
      .then(() => {
        this.router.navigate(['/portfolio']);
      })
      .catch(error => {
        this.errorMensaje = 'Error al iniciar sesión con GitHub: ' + error.message;
      });
  }
}
