import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  imports: [CommonModule, ReactiveFormsModule], // Importar ReactiveFormsModule
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent {
  reservationForm: FormGroup;
  validationMessage: string = ''; // Mensaje para mostrar los errores de validación

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService
  ) {
    this.reservationForm = this.fb.group(
      {
        space: ['', Validators.required],
        startDate: ['', [Validators.required, this.minStartDateValidator()]], // Agregar el validador personalizado
        endDate: ['', Validators.required],
      },
      { validators: this.dateRangeValidator } // Validación personalizada para el rango de fechas
    );

    // Escuchar cambios en el formulario para actualizar el mensaje de validación
    this.reservationForm.statusChanges.subscribe(() => this.updateValidationMessage());
  }

  // Validación personalizada para el rango de fechas
  dateRangeValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const startDate = group.get('startDate')?.value;
    const endDate = group.get('endDate')?.value;
    if (startDate && endDate && new Date(startDate) >= new Date(endDate)) {
      return { dateRangeInvalid: true };
    }
    return null;
  };

  // Validador personalizado para asegurarse de que el startDate sea al menos 30 minutos en el futuro
  minStartDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const startDate = new Date(control.value);
      const now = new Date();
      now.setMinutes(now.getMinutes() + 30); // Sumar 30 minutos a la hora actual
      if (startDate < now) {
        return { minStartDate: true };
      }
      return null;
    };
  }

  // Método para actualizar el mensaje de validación
  updateValidationMessage() {
    const startDateControl = this.reservationForm.get('startDate');
    const endDateControl = this.reservationForm.get('endDate');

    if (this.reservationForm.hasError('dateRangeInvalid')) {
      this.validationMessage = 'La fecha de inicio debe ser menor que la fecha de fin.';
    } else if (startDateControl?.hasError('minStartDate')) {
      this.validationMessage = 'La fecha de inicio debe ser al menos 30 minutos después de la hora actual.';
    } else if (startDateControl?.invalid || endDateControl?.invalid) {
      this.validationMessage = 'Por favor completa todos los campos correctamente.';
    } else {
      this.validationMessage = ''; // Limpiar mensaje si no hay errores
    }
  }

  submit() {
    if (this.reservationForm.invalid) {
      alert('Por favor verifica las fechas. La fecha de inicio debe ser válida.');
      return;
    }

    this.reservationService
      .createReservation(this.reservationForm.value)
      .subscribe(() => {
        alert('Reserva creada con éxito');
        this.reservationForm.reset();
        this.validationMessage = ''; // Limpiar mensaje después de una reserva exitosa
      });
  }
}
