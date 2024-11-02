import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GestionProductosComponent } from './components/gestion-productos/gestion-productos.component';
import { RegistroVentasComponent } from './components/registro-ventas/registro-ventas.component';
import { InformesComponent } from './components/informes/informes.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { RolesGuard } from './guards/roles.service';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [RolesGuard], data: { expectedRole: ["ADMIN"] } },
  { path: 'productos', component: GestionProductosComponent, canActivate: [RolesGuard], data: { expectedRole: ["ADMIN"] } },
  { path: 'ventas', component: RegistroVentasComponent, canActivate: [RolesGuard], data: { expectedRole: ["ADMIN"] } },
  { path: 'informes', component: InformesComponent, canActivate: [RolesGuard], data: { expectedRole: ["ADMIN"] } },
  { path: 'configuracion', component: ConfiguracionComponent, canActivate: [RolesGuard], data: { expectedRole: ["ADMIN"] } }
];
