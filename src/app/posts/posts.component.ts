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
  public posts;

  constructor(
    private postsService: PostsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPosts(); //Get all posts
  }

  //Get all posts
  getPosts() {
    console.log('Getting all the posts');
    this.postsService
      .getPosts()
      .then((response) => {
        console.log(response);
        this.posts = response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //Redirect to post detail
  redirectPostDetail(id) {
    console.log('redirecting to post detail....');
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }
}
