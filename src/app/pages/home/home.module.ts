import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSecitonComponent } from './hero-seciton/hero-seciton.component';
import { PageHome } from './home.component';
import { RouterModule } from '@angular/router';
import { BigCardComponent } from './cards/big-card/big-card.component';
import { FeaturedCardComponent } from './cards/featured-card/featured-card.component';
import { HotNewsComponent } from './hot-news/hot-news.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { LatestCardComponent } from './cards/latest-card/latest-card.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PageHome,
    HeroSecitonComponent,
    BigCardComponent,
    FeaturedCardComponent,
    HotNewsComponent,
    LatestNewsComponent,
    LatestCardComponent
  ],
  exports: [  
    PageHome
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class HomeModule { }
