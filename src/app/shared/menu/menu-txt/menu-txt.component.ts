import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-txt',
  templateUrl: './menu-txt.component.html',
  styleUrls: ['./menu-txt.component.css']
})
export class MenuTxtComponent {

  @Input()
  isMobile:boolean = false;
  
}
