import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const guardGuard: CanActivateFn = (route, state) => {
  return true;
};
