import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input()
  idCard: string = '';
  @Input()
  thumbnailCard: string = '';
  @Input()
  titleCard: string = '';
  @Input()
  categoryCard:string = '';
  @Input()
  dateCard:string = '';

  @Input()
  isSidebar:boolean = false;
}
