import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, fromEvent, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-day6-component',
  imports: [ReactiveFormsModule],
  templateUrl: './day6-component.html',
  styleUrl: './day6-component.scss',
})
export class Day6Component implements AfterViewInit, OnInit {
  sub: Subscription[] = [];
  username = new FormControl('Ali', [Validators.required, Validators.minLength(3)]);

  // form Group
  registerForm = new FormGroup(
    {
      username: this.username,
      email: new FormControl('', Validators.email),
      age: new FormControl(),
    },
    [Validators.required],
  );

  ngOnInit(): void {
    // console.log(this.username);
    console.log(this.registerForm);
    // this.username.valueChanges.subscribe((val) => console.log(val));
    this.registerForm.statusChanges.subscribe((val) => {
      console.log(this.registerForm);
    });
  }

  get ageControl() {
    return this.registerForm.get('age');
  }

  ngAfterViewInit(): void {
    const btn = document.querySelector('.btn');

    if (btn) {
      fromEvent(btn, 'click').subscribe((res) => {
        console.log('From Event Observable', res);
        this.sub?.forEach((sub) => sub.unsubscribe());
      });
    }

    const input = document.querySelector('.search-input');

    if (input) {
      fromEvent(input, 'input')
        .pipe(
          debounceTime(300),
          map((event) => (event.target as HTMLInputElement).value),
        )
        .subscribe((value) => {
          console.log(value);
        });
    }
  }
}
