import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Agrega HttpClientModule aquí
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: any[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.loadReservations();  // Llama al método que obtiene las reservas
  }

  loadReservations() {
    // Llama al servicio para obtener las reservas
    this.reservationService.getReservations().subscribe((data) => {
      this.reservations = data;  // Asigna los datos obtenidos a la propiedad 'reservations'
    });
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id).subscribe(() => {
      this.loadReservations();  // Vuelve a cargar las reservas después de eliminar una
      alert('Reservation delated succesfully')  // Muestra un mensaje de éxito
    });
  }
}

