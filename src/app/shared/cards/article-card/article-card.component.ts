import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent {
  private _resumeCard: string = '';

  @Input()
  idCard: string = '';
  @Input()
  thumbnailCard: string = '';
  @Input()
  categoryCard: string = '';
  @Input()
  titleCard: string = '';
  @Input()
  set resumeCard(value: string) {
    this._resumeCard = value.length <= 15 ? value : value.substring(0, 98) + '...';
  }
  @Input()
  dateCard:string = '';

  get resumeCard(): string {
    return this._resumeCard;
  }

}
