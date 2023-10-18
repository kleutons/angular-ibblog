import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-icons',
  templateUrl: './menu-icons.component.html',
  styleUrls: ['./menu-icons.component.css']
})
export class MenuIconsComponent {

  public classeTheme:string = '';
  public isDark:boolean = false;

  valueSearch:string = '';

  isSearchOpen:boolean = false;

  constructor(private serviceTheme: ThemeService, private router: Router) {
    this.checkDark();
  }

  private checkDark(){
    const checkDark = this.serviceTheme.checkDark();
    this.isDark = checkDark;
    return checkDark;
  }


  public toggle(){
    this.serviceTheme.toggleTheme();
    
  }

  private cleanValue(){
    this.valueSearch = '';
  }

  toggleSearch(){
    this.isSearchOpen = !this.isSearchOpen;
    this.cleanValue()
  }

  routerSearch(){
    this.router.navigate(['/search', this.valueSearch]); 
    this.toggleSearch();
  }
}
