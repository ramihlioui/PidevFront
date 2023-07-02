import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string): void {
    const body = { email, password };
    console.log("body  :",body)
     this.http.post<any>("http://localhost:8080/auth/authenticate", body).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        console.log(response.token)
      })
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
