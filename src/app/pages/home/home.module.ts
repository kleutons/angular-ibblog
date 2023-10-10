import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSecitonComponent } from './hero-seciton/hero-seciton.component';
import { PageHome } from './home.component';



@NgModule({
  declarations: [
    PageHome,
    HeroSecitonComponent
  ],
  exports: [  
    PageHome
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
