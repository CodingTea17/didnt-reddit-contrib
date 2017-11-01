import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './mock-posts';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  posts: any;

  constructor(private database: AngularFirestore) {
    this.posts = database.collection('posts').snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return{ id, data };
        })
      })
  }

  getPosts() {
    return this.posts
  }

  getPostById(postId: string){
    return this.database.doc('posts/' + postId).valueChanges();
  }
  getPostsBySubreddit(subreddit: string){
  //   let output: Post[] = []
  //   for (let i = 0; i <= POSTS.length -1; i++){
  //     if (POSTS[i].subreddit === subreddit){
  //       output.push(POSTS[i]);
  //     }
  //   }
  //   return output;
  // return this.database.collection('posts').doc("Gp0mLvs4xKtlfNyBAl7y");


  return this.database.collection('posts', ref => ref.where("subreddit", "==", subreddit)).snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return{ id, data };
      })
    });
  }

}
