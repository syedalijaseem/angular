import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FetchDataService } from './Services/fetch-data-service';
import { Subscription } from 'rxjs';
import { TodoItem } from './todo.interface';

@Component({
  selector: 'app-day4-component',
  imports: [],
  templateUrl: './day4-component.html',
  styleUrl: './day4-component.scss',
})
export class Day4Component implements OnInit, OnDestroy {
  private dataService = inject(FetchDataService);
  sub: Subscription[] = [];

  todos = signal<TodoItem[]>([]);

  ngOnInit() {
    this.sub?.push(
      this.dataService.getTodos().subscribe((data) => {
        this.todos.set(data);
      }),
    );
    // Observable VS promise
    // Lazy, only start when it's subscribed to
    // can be stopped by unsubscribe
    // can have a stream of data
    // many operators
    this.sub.push(
      this.dataService.myObs.subscribe({
        next(val) {
          console.log(val);
        },
        complete() {
          console.log('stream is completed');
        },
        error(err) {
          console.log(err);
        },
      }),
    );
  }
  // Unsubscribe from observables
  ngOnDestroy(): void {
    this.sub.forEach((s) => s.unsubscribe());
  }
}
