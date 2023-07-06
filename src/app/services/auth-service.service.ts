import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient,private router:Router) {}

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


  forgotPassword(email:string): void{
    const body = {email};
    console.log("body : ",body)
    this.http.post<any>("http://localhost:8080/auth/forgot-password", body).subscribe(
      response => {
        console.log("email sent")
      })  
    } 

    resetPassword(password:string, token:string): void{
      console.log("token : ",token)
      const body = {password};
      console.log("body : ",body)
      this.http.put<any>(`http://localhost:8080/auth/reset-password?token=${token}`, body).subscribe(
        response => {
          console.log("password changed")
          this.router.navigate(['/examples/login']); // Replace 'target-route' with the desired route path

        })  
      } 
}
