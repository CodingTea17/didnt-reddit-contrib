import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { routing } from './app.routing';
import { SubredditComponent } from './subreddit/subreddit.component';
import { PostpageComponent } from './postpage/postpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SubredditComponent,
    PostpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
