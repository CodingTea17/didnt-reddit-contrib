import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post }  from '../post.model';
import { PostService } from '../post.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [PostService]
})
export class HomepageComponent implements OnInit {
  posts: Observable<any[]>;

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }


  goToPostPage(clickedPost: any){
    this.router.navigate([clickedPost.data.subreddit, 'posts', clickedPost.id]);
  };

}
