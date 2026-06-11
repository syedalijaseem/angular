import { Injectable } from '@angular/core';
import {
  filter,
  forkJoin,
  from,
  fromEvent,
  interval,
  map,
  of,
  Subject,
  take,
  takeUntil,
  tap,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  // Subjects
  firstSub = new Subject();

  // Creation Operators
  // emits data value one at a time
  obs1 = of([1, 2, 3]);

  // emits each individual value in array at a time
  obs2 = from([1, 2, 3]);

  notifier = fromEvent(document, 'click');

  obs3 = interval(1000).pipe(takeUntil(this.notifier), take(10));

  obs4 = forkJoin([this.obs1, this.obs2]);

  // Pipeable Operators (pure functions) input = observable, output = observable
  obs = this.obs2.pipe(
    tap((v) => console.log('in service, tap: ', v)),
    filter((v: number) => v > 1),
    map((v: number) => v * 100),
  );
}
