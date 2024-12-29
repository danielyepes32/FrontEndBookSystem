import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { ReservationService } from './modules/reservations/services/reservation.service';
import { CarouselComponent } from './modules/reservations/components/carousel/carousel.component';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, CarouselComponent, CommonModule],  // Incluye CommonModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReservationService],  // Proveedor de ReservationService
})
export class AppComponent {
  title = 'booking-system';
  carouselItems = [
    { image: 'https://via.placeholder.com/300x200', title: 'Espacio 1', description: 'Descripción breve del espacio 1. Ideal para reuniones y eventos.' },
    { image: 'https://via.placeholder.com/300x200', title: 'Espacio 2', description: 'Descripción breve del espacio 2. Perfecto para conferencias.' },
    { image: 'https://via.placeholder.com/300x200', title: 'Espacio 3', description: 'Descripción breve del espacio 3. Una opción tranquila para trabajar.' },
    { image: 'https://via.placeholder.com/300x200', title: 'Espacio 4', description: 'Descripción breve del espacio 4. Un lugar cómodo para actividades de equipo.' },
  ];
  
  constructor(private router: Router) {}

  goToCreateReservation(): void {
    this.router.navigate(['/reservations/create']);
  }

  goToListReservation(): void {
    this.router.navigate(['/reservations/list']);
  }

}
