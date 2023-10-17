import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input()
  articleTitle: string = '';
  @Input()
  articleDate: string = '';
  @Input()
  articleThumbnail: string = '';
  @Input()
  articleContent: string = '';
  
}
