import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';
import { RegistroVentasComponent } from './components/registro-ventas/registro-ventas.component';
import { InformesComponent } from './components/informes/informes.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'productos', component: GestionProductosComponent, canActivate: [authGuard] },
  { path: 'ventas', component: RegistroVentasComponent, canActivate: [authGuard] },
  { path: 'informes', component: InformesComponent, canActivate: [authGuard] },
  { path: 'configuracion', component: ConfiguracionComponent, canActivate: [authGuard] }
];
