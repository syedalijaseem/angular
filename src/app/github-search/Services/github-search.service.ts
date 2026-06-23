import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubSearchResponse } from '../Models/github-search-response.model';

@Injectable({
  providedIn: 'root',
})
export class GithubSearchService {
  private http = inject(HttpClient);

  private readonly apiUrl = `https://api.github.com/search/users?q=`;

  getUsername(username: string): Observable<GithubSearchResponse> {
    return this.http.get<GithubSearchResponse>(`${this.apiUrl}${username}`);
  }
}
