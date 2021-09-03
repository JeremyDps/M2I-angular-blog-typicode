import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/post';
import { PostService } from '../shared/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((p: Post[]) => {
      this.posts = p;
    })
  }

}
