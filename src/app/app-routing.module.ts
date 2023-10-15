import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHome } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { SearchComponent } from './pages/search/search.component'
import { CategoryComponent } from './pages/search/category/category.component'

const routes: Routes = [
  {
    path: '',
    component: PageHome
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'search/:value',
    component: SearchComponent
  },
  {
    path: 'search/category/:category',
    component: CategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
