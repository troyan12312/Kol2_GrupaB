import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../../models/Post';

@Component({
  selector: 'app-dt-forum',
  templateUrl: './dt-forum.component.html',
  styleUrls: ['./dt-forum.component.css']
})
export class DTForumComponent implements OnInit {
  posts: Post[]

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts
    })
  }

}
