import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const access_token = sessionStorage.getItem('access_token');
  if(access_token != null){
    return true
  }
  else{
    router.navigateByUrl('/login')
    return false
  }
}
