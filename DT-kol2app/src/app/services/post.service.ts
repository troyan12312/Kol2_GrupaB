import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl: string = 'https://kol2tai.herokuapp.com/api/forum/posts'

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.postUrl)
  }

  getPostDetails(postId: number): Observable<Post> {
    const url = `${this,this.postUrl}/${postId}`
    return this.httpClient.get<Post>(url)
  }
}
