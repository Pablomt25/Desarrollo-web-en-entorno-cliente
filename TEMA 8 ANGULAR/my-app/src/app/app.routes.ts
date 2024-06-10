import { Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { guardGuard } from './guard.guard';
export const routes: Routes = [
    {path:'detalle/:id', component:DetalleComponent,canActivate:[guardGuard]},
    {path:'cabecera', component:CabeceraComponent}
];
