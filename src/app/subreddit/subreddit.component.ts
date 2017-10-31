import { Component, DoCheck  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css'],
  providers: [PostService]
})
export class SubredditComponent implements DoCheck {
  subreddit: string;
  postsToDisplay: Post[];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) { }

  ngDoCheck(){
    this.route.params.forEach((urlParameters) => {
      this.subreddit = urlParameters['subreddit'];
    });
    this.postsToDisplay = this.postService.getPostsBySubreddit(this.subreddit);
  }

}
