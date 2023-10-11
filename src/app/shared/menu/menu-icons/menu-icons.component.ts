import { Component, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'app-menu-icons',
  templateUrl: './menu-icons.component.html',
  styleUrls: ['./menu-icons.component.css']
})
export class MenuIconsComponent {

  public classeTheme:string = '';
  public isDark:boolean = false;

  isSearchOpen:boolean = false;

  constructor(private serviceTheme: ThemeService) {
    this.checkDark();
  }

  private checkDark(){
    const checkDark = this.serviceTheme.checkDark();
    this.isDark = checkDark;
    return checkDark;
  }


  public toggle(){
    this.serviceTheme.toggleTheme();
    this.checkDark();
  }


  toggleSearch(){
    this.isSearchOpen = !this.isSearchOpen;
  }
  
}
