import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feedback.component.html'
})
export class FeedbackComponent {
  readonly feedbackForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    visitType: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  success = false;

  constructor(private readonly fb: FormBuilder) {}

  submit(): void {
    if (this.feedbackForm.invalid) {
      this.feedbackForm.markAllAsTouched();
      return;
    }

    this.success = true;
    setTimeout(() => {
      this.success = false;
      this.feedbackForm.reset({
        name: '',
        email: '',
        visitType: '',
        message: ''
      });
    }, 2500);
  }
}


