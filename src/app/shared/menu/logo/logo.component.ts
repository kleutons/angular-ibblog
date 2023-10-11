import { Component, Input } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  
  public urlLogo:string = 'iblog-logo.png';
  @Input()
  isDark:boolean = false;

  constructor(private serviceTheme: ThemeService){
  }
  
  ngOnInit():void{
    if(this.isDark){
      this.urlLogo = 'iblog-logo-dark.png';
    }else{
      this.serviceTheme.getIsDark().subscribe((theme) => {
        if(theme){
          this.urlLogo = 'iblog-logo-dark.png';
        }else{
          this.urlLogo = 'iblog-logo.png';
        }
      });
    }
  }
}
