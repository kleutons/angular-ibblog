import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHome } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PageHome
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
