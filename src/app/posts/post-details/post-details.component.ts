import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/shared/models/comment';
import { Post } from 'src/app/shared/models/post';
import { CommentService } from 'src/app/shared/services/comment.service';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post !: Post;

  id !: number;

  comments: Comment[] = [];

  constructor(private postService: PostService, private commentService: CommentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params.id);

    this.postService.getPost(this.id).subscribe(post => this.post = post);

    this.commentService.getCommentsByPost(this.id).subscribe((comment: Comment[]) => {
      this.comments = comment
    });
  }

}
