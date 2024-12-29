// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { ReservationListComponent } from './modules/reservations/components/reservation-list/reservation-list.component';
import { ReservationFormComponent } from './modules/reservations/components/reservation-form/reservation-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/reservations/list', pathMatch: 'full' },
  { path: 'reservations/list', component: ReservationListComponent },
  { path: 'reservations/create', component: ReservationFormComponent },
  { path: '**', redirectTo: '/reservations/list' }, // Ruta por defecto en caso de error
];
