import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-social',
  templateUrl: './menu-social.component.html',
  styleUrls: ['./menu-social.component.css']
})
export class MenuSocialComponent {
  
  @Input()
  isMobile:boolean = false;
}
