import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): void {
    const loginData = { username, password };

     this.http.post<any>("http://localhost:8080/auth/authenticate", loginData).subscribe(
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
