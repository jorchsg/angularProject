import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css'],
})
export class PostdetailComponent implements OnInit {
  id;
  p;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
    });
    this.getPostDetail();
  }

  ngOnInit(): void {
    this.p = {};
  }

  getPostDetail() {
    this.postsService
      .getPostDetail(this.id)
      .then((response) => {
        this.p = response;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
