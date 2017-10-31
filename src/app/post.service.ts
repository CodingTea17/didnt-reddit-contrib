import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-posts';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  posts: Observable<any[]>;

  constructor(database: AngularFirestore) {
    this.posts = database.collection('posts').valueChanges();
  }

  getPosts() {
    return this.posts
  }

  getPostById(postId: number){
    for (let i = 0; i <= POSTS.length - 1; i++) {
      if (POSTS[i].id === postId) {
        return POSTS[i];
      }
    }
  }
  getPostsBySubreddit(subreddit: string){
    let output: Post[] = []
    for (let i = 0; i <= POSTS.length -1; i++){
      if (POSTS[i].subreddit === subreddit){
        output.push(POSTS[i]);
      }
    }
    return output;
  }
}
