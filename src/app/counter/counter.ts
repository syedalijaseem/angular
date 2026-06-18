import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from './state/actions';
import { CommonModule } from '@angular/common';
import { selectCount } from './state/selector';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  private store = inject(Store);
  // count = this.store.select((state: any) => state.counter.count);

  count = this.store.select(selectCount);

  increment() {
    this.store.dispatch(increment());
  }
}
