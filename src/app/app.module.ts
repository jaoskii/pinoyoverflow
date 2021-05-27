import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { TrendingPostsComponent } from './main/trending-posts/trending-posts.component';
import { FollowedCommunityPostsComponent } from './main/followed-community-posts/followed-community-posts.component';
import { TrendingCommunitiesComponent } from './main/trending-communities/trending-communities.component';
import { RecentlyVisitedComponent } from './main/recently-visited/recently-visited.component';
import { CreateSideoptionComponent } from './others/create-sideoption/create-sideoption.component';
import { TopTopicsComponent } from './main/top-topics/top-topics.component';
import { SiteFooterComponent } from './main/site-footer/site-footer.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrendingPostsComponent,
    FollowedCommunityPostsComponent,
    TrendingCommunitiesComponent,
    RecentlyVisitedComponent,
    CreateSideoptionComponent,
    TopTopicsComponent,
    SiteFooterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
