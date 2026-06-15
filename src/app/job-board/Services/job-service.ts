import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../Models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private http = inject(HttpClient);

  private readonly apiUrl = `https://hacker-news.firebaseio.com/v0`;

  getJobIds(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}/jobstories.json`);
  }

  getJob(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/item/${id}.json`);
  }
}
