import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SharedModule } from '../../shared/shared.module';
import { CategoryComponent } from './category/category.component'


@NgModule({
  declarations: [
    SearchComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SearchModule { }
