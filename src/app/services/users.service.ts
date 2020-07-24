import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //For HTTP Request
import { environment } from '../../environments/environment'; //Read Enviroment constant

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //GET API URL
  private apiUrl = environment.apiUrl + 'users';

  constructor(private httpClient: HttpClient) {}

  //GET ALL USERS
  getUsers() {
    return this.httpClient.get(this.apiUrl).toPromise();
  }
}
