import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { ReservationService } from './core/services/reservation.service';

interface NavLink {
  label: string;
  path: string;
  exact?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly navLinks: NavLink[] = [
    { label: 'Home', path: '/', exact: true },
    { label: 'Menu', path: '/menu', exact: false },
    { label: 'Feedback', path: '/feedback', exact: false }
  ];

  readonly currentYear = new Date().getFullYear();

  readonly reservationForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    date: ['', Validators.required],
    time: ['', Validators.required],
    guests: [2, [Validators.required, Validators.min(1), Validators.max(12)]]
  });

  constructor(private readonly fb: FormBuilder, readonly reservationState: ReservationService) {}

  openReservation(): void {
    this.reservationState.open();
  }

  closeReservation(): void {
    this.reservationState.close();
    this.resetReservationForm();
  }

  submitReservation(): void {
    if (this.reservationForm.invalid) {
      this.reservationForm.markAllAsTouched();
      return;
    }

    this.reservationState.markSuccess(true);
    setTimeout(() => {
      this.reservationState.markSuccess(false);
      this.closeReservation();
    }, 2000);
  }

  private resetReservationForm(): void {
    this.reservationForm.reset({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: 2
    });
  }
}

