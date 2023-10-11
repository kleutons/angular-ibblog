import { Component, HostListener } from '@angular/core';
import { ScreenSizeService } from 'src/app/services/screen-size.service';
import { ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public urlLogo:string = 'iblog-logo.png';

  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  private checkScreenSize():void{
    const checkScreen = window.innerWidth;
    this.screenSizeService.checkScreenSize(checkScreen);
  }

  constructor(private serviceTheme: ThemeService, private screenSizeService: ScreenSizeService){
    this.serviceTheme.getIsDark().subscribe((theme) => {
      if(theme){
        this.urlLogo = 'iblog-logo-dark.png';
      }else{
        this.urlLogo = 'iblog-logo.png';
      }
    });
  }
  


  ngOnInit(): void {
    this.screenSizeService.isMobile$.subscribe((isMobile) => {
      this.isMobile = isMobile;
    });
  }
}
