import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs-compat';
import { User } from '../pages/examples/model/UserModel';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/user';  

  constructor(private http: HttpClient) {}

  getUserById(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    console.log(url)
    return this.http.get<User>(url);
  }
}
