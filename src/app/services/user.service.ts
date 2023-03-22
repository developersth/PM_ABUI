import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Token } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api';
  public user: Observable<User | null>;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number) {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  addUser(user: User) {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(users: User) {
    return this.http.put<User>(`${this.apiUrl}/${users.id}`, users);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  logIn(username: string,password: string) {
    return this.http.post(this.apiUrl+'/auth/login', {username,password});
  }
}
