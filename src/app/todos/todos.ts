import { Component, inject, OnInit } from '@angular/core';
import { TodosStore } from './store/todos.store';
import { TodosList } from '../todos-list/todos-list';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodosList, MatProgressSpinner],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
  store = inject(TodosStore);

  ngOnInit(): void {
    this.loadTodos().then(() => {
      console.log('Todos Loaded');
    });
  }

  async loadTodos() {
    return this.store.loadAll();
  }
}
