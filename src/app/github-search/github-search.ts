import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GithubSearchService } from './Services/github-search.service';
import { GithubUser } from './Models/github-search.model';

@Component({
  selector: 'app-github-search',
  imports: [ReactiveFormsModule],
  templateUrl: './github-search.html',
  styleUrl: './github-search.scss',
})
export class GithubSearch {
  private githubSearchService = inject(GithubSearchService);

  users = signal<GithubUser[]>([]);
  filterText = signal('');

  githubForm = new FormGroup({
    username: new FormControl(''),
    filter: new FormControl(''),
  });

  filteredUsers = computed(() => {
    const filter = this.filterText().toLowerCase().trim();

    if (!filter) {
      return this.users();
    }

    return this.users().filter((user) => {
      return (
        user.id.toString().includes(filter) ||
        user.login.toLowerCase().includes(filter) ||
        user.html_url.toLowerCase().includes(filter)
      );
    });
  });

  search() {
    const username = this.githubForm.controls.username.value?.trim() ?? '';

    if (!username) {
      return;
    }

    if (!/^[a-zA-Z0-9-]+$/.test(username)) {
      alert('Username can only contain letters, numbers, and hyphens.');
      return;
    }

    this.githubSearchService.getUsername(username).subscribe({
      next: (response) => {
        this.users.set(response.items);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  updateFilter() {
    this.filterText.set(this.githubForm.controls.filter.value ?? '');
  }
}
