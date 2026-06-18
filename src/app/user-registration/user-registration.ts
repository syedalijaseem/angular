import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

function passwordMatchingValidator(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { passwordMismatch: true };
}

function contactMethodValidator(group: AbstractControl): ValidationErrors | null {
  const contactMethod = group.get('contactMethod')?.value;
  const email = group.get('email')?.value;
  const phoneNumber = group.get('phoneNumber')?.value;

  if (!contactMethod) {
    return { contactMethodRequired: true };
  }

  if (contactMethod === 'email' && !email) {
    return { emailRequired: true };
  }

  if (contactMethod === 'phone' && !phoneNumber) {
    return { phoneRequired: true };
  }

  return null;
}

@Component({
  selector: 'app-user-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './user-registration.html',
  styleUrl: './user-registration.scss',
})
export class UserRegistration {
  registrationForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),

      email: new FormControl('', [Validators.email]),

      password: new FormControl('', [Validators.required, Validators.minLength(6)]),

      confirmPassword: new FormControl('', [Validators.required]),

      phoneNumber: new FormControl(''),

      contactMethod: new FormControl('', [Validators.required]),
    },
    {
      validators: [passwordMatchingValidator, contactMethodValidator],
    },
  );

  get username() {
    return this.registrationForm.controls.username;
  }

  get email() {
    return this.registrationForm.controls.email;
  }

  get password() {
    return this.registrationForm.controls.password;
  }

  get confirmPassword() {
    return this.registrationForm.controls.confirmPassword;
  }

  get phoneNumber() {
    return this.registrationForm.controls.phoneNumber;
  }

  get contactMethod() {
    return this.registrationForm.controls.contactMethod;
  }

  onSubmit() {
    console.log(this.registrationForm.value);

    this.registrationForm.reset();
  }
}
