import { Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MonedasComponent } from './monedas/monedas.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { guardGuard } from './guard.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    {path:'detalle/:id', component:DetalleComponent,canActivate:[guardGuard]},
    {path:'cabecera', component:CabeceraComponent},
    {path:'monedas', component:MonedasComponent},
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];
