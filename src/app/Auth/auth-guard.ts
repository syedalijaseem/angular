import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // logic to check if user is authenticated
  const num = Math.random();
  const isLoggedIn = num > 0.5;
  console.log(num);
  console.log(isLoggedIn);

  if (!isLoggedIn) {
    router.navigate(['day5']);
  }

  return isLoggedIn;
};
