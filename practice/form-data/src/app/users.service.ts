import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userData: object;

  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get('http://localhost:3000/user').toPromise();
  }

  // getusers() {
  //   const url = 'http://localhost:3000/user';
  //   return this.http.get(url).toPromise();
  // }
}
