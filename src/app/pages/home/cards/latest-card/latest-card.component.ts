import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-latest-card',
  templateUrl: './latest-card.component.html',
  styleUrls: ['./latest-card.component.css']
})
export class LatestCardComponent {
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
