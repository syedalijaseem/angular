import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FirstComponent } from './first-component/first-component';
import { DirectivesIntroComponent } from './directives-intro-component/directives-intro-component';
import { LifecycleIntro } from './lifecycle-intro/lifecycle-intro';
// import {FirstComponent} from './first-component/first-component';
import { Day3Component } from './day3-component/day3-component';
import { Day4Component } from './day4-component/day4-component';
import { Day5Component } from './day5-component/day5-component';
import { Day6Component } from './day6-component/day6-component';
import { ProductComponent } from './product-component/product-component';
import { JobBoard } from './job-board/job-board';
import { StarWarsSearch } from './star-wars-search/star-wars-search';
import { MortgageCalculator } from './mortgage-calculator/mortgage-calculator';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Day3Component,
    FirstComponent,
    DirectivesIntroComponent,
    LifecycleIntro,
    Day4Component,
    Day5Component,
    Day6Component,
    ProductComponent,
    JobBoard,
    StarWarsSearch,
    MortgageCalculator,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('inClass');
  condition = true;
  private router = inject(Router);

  toggle() {
    this.condition = !this.condition;
  }

  toProduct() {
    this.router.navigate(['/product/2/1'], { queryParams: { sort: 'latest', page: 1 } });
  }
}
