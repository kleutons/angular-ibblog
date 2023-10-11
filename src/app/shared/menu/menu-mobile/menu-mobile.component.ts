import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.css']
})
export class MenuMobileComponent {
  isMenuOpen:boolean = false;

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
}
