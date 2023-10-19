import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostShareComponent } from './post-share/post-share.component';
import { PostTagsComponent } from './post-tags/post-tags.component';
import { PostHeaderComponent } from './post-header/post-header.component';
import { PostAuthorComponent } from './post-author/post-author.component';
import { SharedModule } from '../../shared/shared.module';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    PostComponent,
    PostShareComponent,
    PostTagsComponent,
    PostHeaderComponent,
    PostAuthorComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    PostAuthorComponent
  ]
})
export class PostModule { }
