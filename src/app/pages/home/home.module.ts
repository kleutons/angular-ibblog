import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSecitonComponent } from './hero-seciton/hero-seciton.component';
import { PageHome } from './home.component';
import { RouterModule } from '@angular/router';
import { HotNewsComponent } from './hot-news/hot-news.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PageHome,
    HeroSecitonComponent,
    HotNewsComponent,
    LatestNewsComponent
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
