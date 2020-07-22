import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  //List of posts
  private posts;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPosts(); //Get all posts
  }

  //Get all users
  getPosts() {
    console.log('Getting all the posts');
    this.postsService
      .getPosts()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}