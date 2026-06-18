import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TodoItem } from '../todo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  // fetch
  private http = inject(HttpClient);

   // a value / error / complete
    // Reactive 
  myObs = new Observable<number>((subscriber)=>{
    console.log("Start data stream");
    // start of the data stream
    subscriber.next(1)
    subscriber.next(2)
    subscriber.error("Error occurs")
    subscriber.next(3)
    subscriber.next(4)
   
    subscriber.complete();
  });

  getTodos() {
    // returns an Observable
    return this.http.get<TodoItem[]>(this.url);
  }

}
