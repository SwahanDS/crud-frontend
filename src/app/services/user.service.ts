import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL="http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL+"/getUsers"}`);
  }

  createUser(user: User): Observable<Object>{
    return this.httpClient.post<User[]>(`${this.baseURL+"/addUser"}`,user);
  }

  getUser(ps:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL+"/getUsers"}/${ps}`);
  }

  updateUser(ps:number,user: User): Observable<Object>{
    return this.httpClient.put<User[]>(`${this.baseURL+"/updateUser"}/${ps}`,user);
  }

  deleteUser(ps:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"/deleteUser"}/${ps}`);
  }
}
