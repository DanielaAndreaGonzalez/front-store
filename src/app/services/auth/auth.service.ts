import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8081/api/';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}auth/login`, { username, password });
  }

  register(username: string, password: string, firstname: string, lastname: string, roles: string[]): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}auth/register`, { username, password, firstname, lastname, roles });
  }
}
