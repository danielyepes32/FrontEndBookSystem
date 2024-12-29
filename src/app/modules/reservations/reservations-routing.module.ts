// src/app/modules/reservations/reservations-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';

const routes: Routes = [
  { path: 'list', component: ReservationListComponent },
  { path: 'create', component: ReservationFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationsRoutingModule {}
