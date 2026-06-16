import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-flight-booker',
  imports: [ReactiveFormsModule],
  templateUrl: './flight-booker.html',
  styleUrl: './flight-booker.scss',
})
export class FlightBooker {
  flightForm = new FormGroup({
    flightType: new FormControl('one-way'),
    departureDate: new FormControl(''),
    returnDate: new FormControl(''),
  });

  message = signal('');
  error = signal('');

  onSubmit() {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    this.message.set('');
    this.error.set('');

    const { flightType, departureDate, returnDate } = this.flightForm.getRawValue();

    if (!departureDate) {
      return;
    }

    const departure = new Date(departureDate);

    if (departure < currentDate) {
      this.error.set('Departure date cannot be in the past');
      return;
    }

    if (flightType === 'return') {
      if (!returnDate) {
        this.error.set('Please select a return date');
        return;
      }

      const returning = new Date(returnDate);

      if (returning < departure) {
        this.error.set('Return Date must be after or on Departure Date');
        return;
      }

      this.message.set(
        `You have booked a return flight, departing on ${departureDate} and returning on ${returnDate}`,
      );

      return;
    }

    this.message.set(`You have booked a one-way flight on ${departureDate}`);
  }
}
