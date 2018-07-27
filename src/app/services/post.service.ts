import { Injectable } from '@angular/core';
import {Post} from "../post";
import {Subject} from "rxjs/Subject";

@Injectable()
export class PostService {

  postSubject = new Subject<Post[]>();

  posts: Post[] = [
    new Post('Premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue vitae nunc pellentesque posuere.'),
    new Post('Deuxième post', 'Nulla iaculis massa leo, at commodo velit rhoncus et. Phasellus nec odio ex.'),
    new Post('Troisième post', 'Sed magna neque, tempor at sapien in, sodales porttitor enim.')
  ];

  constructor() { }

  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }

   addPost(newPost: Post) {
     this.posts.push(newPost);
     this.emitPostSubject();
   }

   deletePost(index: number) {
     this.posts.splice(index, 1);
     this.emitPostSubject();
   }

  lovePost(love: boolean, index: number) {
    love ? this.posts[index].loveIts++ : this.posts[index].loveIts--;
    this.emitPostSubject();
  }
}
