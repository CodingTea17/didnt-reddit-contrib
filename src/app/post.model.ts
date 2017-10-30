export class Post {

  upvotes: number = 0;
  change: number = 0;
  
  constructor(public title: string, public date: string, public author: string, public subreddit: string, public link: string, public id: number){}

}
