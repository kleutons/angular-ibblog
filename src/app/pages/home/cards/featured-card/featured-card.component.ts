import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.css']
})
export class FeaturedCardComponent {
  @Input()
  thumbnailCard: string = '';
  @Input()
  titleCard: string = '';
  @Input()
  dateCard:string = '';

}
