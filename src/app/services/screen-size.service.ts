import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private isMobileSubject = new BehaviorSubject<boolean>(false);
  isMobile$ = this.isMobileSubject.asObservable();

  constructor() {
    const screenSize = window.innerWidth;
    this.checkScreenSize(screenSize);
   }

   checkScreenSize(screenSize:number):void{
    const checkScreen = screenSize < 768;
    if(this.isMobileSubject.value !== checkScreen){
      this.isMobileSubject.next(checkScreen);
    }
   }
}
