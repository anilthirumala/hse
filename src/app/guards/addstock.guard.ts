import { CanActivateFn } from '@angular/router';

export const addstockGuard: CanActivateFn = (route, state) => {
  let status  = localStorage.getItem('status')
  if(status !=null && status=='loggedin')
  return true;
    else
  return false;
};
