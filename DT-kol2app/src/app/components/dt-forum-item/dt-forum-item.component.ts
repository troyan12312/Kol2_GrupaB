import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../models/Post';

@Component({
  selector: 'app-dt-forum-item',
  templateUrl: './dt-forum-item.component.html',
  styleUrls: ['./dt-forum-item.component.css']
})
export class DTForumItemComponent implements OnInit {
  @Input() post: Post

  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    return {
      title: this.post.title,
      text: this.post.text
    }
  }
}
