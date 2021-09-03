import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getCommentsByPost(idPost: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.typicode_url}/posts/${idPost}/comments`);
  }
}
