import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css']
})
export class ButtonPrimaryComponent {
  @Input()
  titleButton:string = '';
  @Input()
  width: string = '';
}
