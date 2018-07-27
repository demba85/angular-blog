import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../post";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLoveIt(love: boolean) {
    this.postService.lovePost(love, this.index);
  }

   onDeletePost() {
     this.postService.deletePost(this.index);
   }
}
