import { Injectable } from '@angular/core';
import { TODOS } from '../model/mock.data';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  async getTodos() {
    await sleep(1000);
    return TODOS;
  }
}

// simulating delay
async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
