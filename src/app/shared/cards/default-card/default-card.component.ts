import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-default-card',
  templateUrl: './default-card.component.html',
  styleUrls: ['./default-card.component.css']
})
export class DefaultCardComponent {
  @Input()
  idCard: string = '';
  @Input()
  thumbnailCard: string = '';
  @Input()
  titleCard: string = '';
  @Input()
  dateCard:string = '';
}
