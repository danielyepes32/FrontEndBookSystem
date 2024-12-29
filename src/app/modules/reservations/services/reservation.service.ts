import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';  // Importa 'of' de RxJS
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private baseUrl = 'http://localhost:3000/api/reservations'; // Cambia por tu endpoint

  constructor(private http: HttpClient) {}

  // Simulación de la respuesta de obtener las reservas
  getReservations(): Observable<any[]> {
    // Datos simulados (en lugar de la llamada real al backend)
    const simulatedData = [
      { id: '1', name: 'Reserva 1', date: '2024-01-01', status: 'confirmed' },
      { id: '2', name: 'Reserva 2', date: '2024-02-01', status: 'pending' },
      { id: '3', name: 'Reserva 3', date: '2024-03-01', status: 'cancelled' },
    ];

    // Usamos 'of()' para devolver los datos como un Observable
    return of(simulatedData);
  }

  // Simulación de la creación de una reserva
  createReservation(reservation: any): Observable<any> {
    // Aquí puedes simular el retorno de la nueva reserva creada
    return of({ ...reservation, id: Math.random().toString(36).substr(2, 9) });
  }

  // Simulación de la eliminación de una reserva
  deleteReservation(id: string): Observable<any> {
    // Simula la eliminación, retornando un Observable vacío
    console.log(`Eliminando reserva con ID: ${id}`);
    return of({ success: true, id });
  }
}
