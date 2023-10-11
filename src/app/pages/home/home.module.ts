import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSecitonComponent } from './hero-seciton/hero-seciton.component';
import { PageHome } from './home.component';
import { RouterModule } from '@angular/router';
import { BigCardComponent } from './cards/big-card/big-card.component';
import { FeaturedCardComponent } from './cards/featured-card/featured-card.component';


@NgModule({
  declarations: [
    PageHome,
    HeroSecitonComponent,
    BigCardComponent,
    FeaturedCardComponent
  ],
  exports: [  
    PageHome
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
