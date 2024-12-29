import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component'; // Asegúrate de importar el componente
import { ReservationsRoutingModule } from './reservations-routing.module';

@NgModule({
  declarations: [ReservationListComponent],  // Agregar el componente aquí
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    HttpClientModule,  // Asegúrate de que HttpClientModule esté importado
  ],
  providers: [],
})
export class ReservationsModule {}
