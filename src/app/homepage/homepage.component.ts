import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post }  from '../post.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }



  ngOnInit() {
  }


  posts: Post[] = [
    new Post('Cat attacks person', '10/29/17', 'BeesAndFacts', 'aww', 'https://www.reddit.com/r/aww/comments/79ixb5/we_keep_telling_our_friend_to_put_his/', 1),
    new Post('Seattle Tower. Seatle\'s first art-deco tower', '10/29/17', 'vaf', 'architecture', 'https://www.reddit.com/r/architecture/comments/79okf4/seattle_tower_seattles_first_artdeco_tower_oc/', 2),
    new Post('A Frozen Waterfall in Johnston Canyon, Banff National Park, Canada', '10/29/17', 'nickphys', 'earthporn', 'https://www.reddit.com/r/EarthPorn/comments/79nwiq/a_frozen_waterfall_in_johnston_canyon_banff/', 3),
    new Post('The gang\'s all here!', '10/29/17', 'Killerzeit', 'telsa', 'https://imgur.com/o3ZQEGC', 4),
    new Post('Steve Harrington - Babysitter', '10/29/17', 'Liamneeson2015', 'strangerthings', 'https://i.redd.it/tcre1evp0zuz.jpg', 5)

  ];
  goToPostPage(clickedPost: Post){
    this.router.navigate(['posts', clickedPost.id]);
  };

}
