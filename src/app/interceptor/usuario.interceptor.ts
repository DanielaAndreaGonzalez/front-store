import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token/token.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';


export const usuarioInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const isApiUrl = req.url.includes("api/auth");

  if (!tokenService.isLogged() || isApiUrl) {
    return next(req);
  }

  const token = tokenService.getToken();

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Token expirado o no autorizado
        tokenService.logout(); // Limpia el estado de la sesión
        router.navigate(['/login']); // Redirige al login
      }
      return throwError(() => new Error(error.message));
    })
  );
};