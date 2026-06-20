import { Routes } from '@angular/router';
import { Day6Component } from './day6-component/day6-component';
import { Day4Component } from './day4-component/day4-component';
import { Day5Component } from './day5-component/day5-component';
import { Day3Component } from './day3-component/day3-component';
import { ChildComponent } from './day3-component/child-component/child-component';
import { FirstComponent } from './first-component/first-component';
import { ProductRouteComponent } from './product-route-component/product-route-component';
import { authGuard } from './Auth/auth-guard';
import { FlightBooker } from './flight-booker/flight-booker';
import { Counter } from './counter/counter';
import { UserRegistration } from './user-registration/user-registration';
import { NewComponent } from './new-component/new-component';
import { Todos } from './todos/todos';
import { UndoableCounter } from './undoable-counter/undoable-counter';

export const routes: Routes = [
  { path: '', component: Day3Component },
  {
    path: 'day3',
    component: Day3Component,
    children: [{ path: 'child', component: ChildComponent }],
  },
  { path: 'day4', component: Day4Component },
  { path: 'day5', component: Day5Component },
  { path: 'day6', component: Day6Component, canActivate: [authGuard] },
  { path: 'flights', component: FlightBooker },
  { path: 'registration', component: UserRegistration },
  { path: 'counter', component: Counter },
  { path: 'newcomponent', component: NewComponent },
  { path: 'todo', component: Todos },
  { path: 'undoablecounter', component: UndoableCounter },

  {
    path: 'lifecycle',
    loadComponent: () => import('./lifecycle-intro/lifecycle-intro').then((c) => c.LifecycleIntro),
  },

  { path: 'product/:id', component: ProductRouteComponent },

  {
    path: 'directive',
    loadComponent: () =>
      import('./directives-intro-component/directives-intro-component').then(
        (c) => c.DirectivesIntroComponent,
      ),
  },

  // wild card route
  // renders at a path that doesn't exist
  // must be last else will render for every route added after this
  { path: '**', component: FirstComponent },
];
