import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { StarWarsService } from './Services/star-wars-service';

@Component({
  selector: 'app-star-wars-search',
  imports: [ReactiveFormsModule],
  templateUrl: './star-wars-search.html',
  styleUrl: './star-wars-search.scss',
})
export class StarWarsSearch {
  characterName = new FormControl('');
  private peopleService = inject(StarWarsService);

  films = signal<any[]>([]);

  onSubmit(): void {
    if (this.characterName.value) {
      this.films.set([]);
      this.peopleService.getPeople(this.characterName.value).subscribe((person) => {
        if (!person) {
          console.log('Character not found');
          return;
        }

        for (let i = 0; i < person.films.length; i++) {
          const apiUrl = person.films[i];

          this.peopleService.getFilm(apiUrl).subscribe((film) => {
            this.films.update((curr) => [...curr, film]);
          });
        }
      });
    }
  }
}
