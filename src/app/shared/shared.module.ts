import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuIconsComponent } from './menu/menu-icons/menu-icons.component';
import { MenuTxtComponent } from './menu/menu-txt/menu-txt.component';
import { MenuMobileComponent } from './menu/menu-mobile/menu-mobile.component';
import { LogoComponent } from './menu/logo/logo.component';
import { MenuSocialComponent } from './menu/menu-social/menu-social.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuIconsComponent,
    MenuTxtComponent,
    MenuMobileComponent,
    LogoComponent,
    MenuSocialComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
