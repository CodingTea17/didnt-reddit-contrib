import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-postpage',
  templateUrl: './postpage.component.html',
  styleUrls: ['./postpage.component.css'],
  providers: [PostService]
})

export class PostpageComponent implements OnInit {
  postId: string;
  postToDisplay: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
      console.log(this.postId)
    });
    this.postToDisplay = this.postService.getPostById(this.postId);
    console.log(this.postToDisplay);
  }

}
