import { Injectable, OnDestroy, RendererFactory2 } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {
  private nameLocalStorage: string = 'ibblog-theme';
  private nameClass: string = 'dark-theme';
  private isDark = new BehaviorSubject<boolean>(false);
  private destroy$ = new Subject<void>();

  constructor(private rendererFactory: RendererFactory2) {
    this.checkDark();
  }

  getIsDark(): Observable<boolean> {
    return this.isDark.asObservable();
  }

  toggleTheme() {
    const check = !this.isDark.value;
    this.updateTheme(check);
    localStorage.setItem(this.nameLocalStorage, check ? this.nameClass : '');
  }

  checkDark(): boolean {
    const check = !!localStorage.getItem(this.nameLocalStorage);
    this.updateTheme(check);
    return check;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private updateTheme(isDark: boolean) {
    this.isDark.next(isDark);
    const renderer = this.rendererFactory.createRenderer(null, null);
    const body = document.body;
    if (isDark) {
      renderer.addClass(body, this.nameClass);
    } else {
      renderer.removeClass(body, this.nameClass);
    }
  }
}
