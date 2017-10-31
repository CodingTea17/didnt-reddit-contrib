import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PostpageComponent } from './postpage/postpage.component';
import { SubredditComponent } from './subreddit/subreddit.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: ':subreddit/posts/:id',
    component: PostpageComponent
  },
  {
    path: ':subreddit',
    component: SubredditComponent
  }


 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
