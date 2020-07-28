import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //For HTTP Request
import { environment } from '../../environments/environment'; //Read Enviroment constant

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  //Post API URL
  private apiUrl = environment.apiUrl + 'posts';

  constructor(private httpClient: HttpClient) {}

  //Get All Posts
  getPosts() {
    return this.httpClient.get(this.apiUrl).toPromise();
  }

  //Get One Post
  getPostDetail(id) {
    return this.httpClient.get(this.apiUrl + '/' + id).toPromise();
  }
}
