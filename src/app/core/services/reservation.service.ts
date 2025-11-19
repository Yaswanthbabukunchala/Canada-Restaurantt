import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private readonly _isOpen = signal(false);
  private readonly _success = signal(false);

  readonly isOpen = this._isOpen.asReadonly();
  readonly success = this._success.asReadonly();

  open(): void {
    this._isOpen.set(true);
    this._success.set(false);
  }

  close(): void {
    this._isOpen.set(false);
    this._success.set(false);
  }

  markSuccess(value: boolean): void {
    this._success.set(value);
  }
}

