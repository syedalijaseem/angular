import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Person } from '../Interfaces/person';
import { Film } from '../Interfaces/film';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  private http = inject(HttpClient);

  private readonly apiUrl = `https://swapi.info/api/people`;

  getPeople(name: string) {
    return this.http
      .get<Person[]>(this.apiUrl)
      .pipe(map((people) => people.find((p) => p.name === name)));
  }

  getFilm(url: string) {
    return this.http.get<Film>(url);
  }
}
