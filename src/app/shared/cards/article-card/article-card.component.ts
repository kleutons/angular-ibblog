import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent {
  @Input()
  thumbnailCard: string = '';
  @Input()
  categoryCard: string = '';
  @Input()
  titleCard: string = '';
  @Input()
  resumeCard: string = '';
  @Input()
  dateCard:string = '';

}
