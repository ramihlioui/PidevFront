import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the token from wherever you have stored it (e.g., local storage)
    const token = localStorage.getItem('token');

    if (request.headers.has('Content-Type'))
    // Clone the request and add the token to the headers
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
   
      }
    });

    // Pass the modified request to the next interceptor or to the backend server
    return next.handle(request);
  }
}