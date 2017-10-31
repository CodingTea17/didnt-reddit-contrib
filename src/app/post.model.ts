export class Post {

  upvotes: number = 0;
  change: number = 0;
  date: number = Math.floor(Date.now()/1000);

  constructor(public title: string, public author: string, public subreddit: string, public link: string, public id: number){}

}
