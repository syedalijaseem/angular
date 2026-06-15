import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mortgage-calculator',
  imports: [ReactiveFormsModule],
  templateUrl: './mortgage-calculator.html',
  styleUrl: './mortgage-calculator.scss',
})
export class MortgageCalculator {
  loanAmount = new FormControl('');
  interestRate = new FormControl('');
  loanTerm = new FormControl('');

  monthlyPayment = signal(0);
  totalPayment = signal(0);
  totalInterest = signal(0);

  errorMessage = signal('');

  calculate(): void {
    const loan = Number(this.loanAmount.value);
    const rate = Number(this.interestRate.value);
    const term = Number(this.loanTerm.value);

    if (isNaN(loan) || isNaN(rate) || isNaN(term) || loan <= 0 || rate <= 0 || term <= 0) {
      this.errorMessage.set('Please enter valid positive numbers');
      return;
    }

    this.errorMessage.set('');

    const monthlyRate = rate / 100 / 12;

    const totalPayments = term * 12;

    const payment =
      (loan * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    const totalPayment = payment * totalPayments;

    const totalInterest = totalPayment - loan;

    this.monthlyPayment.set(Number(payment.toFixed(2)));

    this.totalPayment.set(Number(totalPayment.toFixed(2)));

    this.totalInterest.set(Number(totalInterest.toFixed(2)));
  }
}
