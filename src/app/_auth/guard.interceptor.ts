import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const guardInterceptor: HttpInterceptorFn = (req, next) => {

  const authToken = JSON.stringify(sessionStorage.getItem('access_token'));

  console.log(authToken);
  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
            'Authorization': `Bearer ${authToken}`
      /* 'Accept' : 'application/json',
      'Content-Type': 'application/json',
      //'Accept' : 'application/json',
      Authorization: `Bearer ${authToken}` */
    }
  });

  return next(authReq).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        // Handle HTTP errors
        if (err.status === 401) {
          // Specific handling for unauthorized errors         
          console.error('Unauthorized request:', err);
          // You might trigger a re-authentication flow or redirect the user here
        } else {
          // Handle other HTTP error codes
          console.error('HTTP error:', err.message);
        }
      } else {
        // Handle non-HTTP errors
        console.error('An error occurred:', err);
      }

      // Re-throw the error to propagate it further
      return throwError(() => err); 
    })
  );;
};