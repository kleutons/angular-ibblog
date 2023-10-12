import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-default',
  templateUrl: './widget-default.component.html',
  styleUrls: ['./widget-default.component.css']
})
export class WidgetDefaultComponent {
  @Input()
  widgetTitle:string = 'Title Widget';
  
}
