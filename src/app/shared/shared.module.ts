import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BigCardComponent } from './cards/big-card/big-card.component';
import { FeaturedCardComponent } from './cards/featured-card/featured-card.component';
import { ArticleCardComponent } from './cards/article-card/article-card.component'
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuIconsComponent } from './menu/menu-icons/menu-icons.component';
import { MenuTxtComponent } from './menu/menu-txt/menu-txt.component';
import { MenuMobileComponent } from './menu/menu-mobile/menu-mobile.component';
import { LogoComponent } from './menu/logo/logo.component';
import { MenuSocialComponent } from './menu/menu-social/menu-social.component';
import { SocialComponent } from './sidebar/social/social.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeaturedArticlesComponent } from './sidebar/featured-articles/featured-articles.component';
import { TagsComponent } from './sidebar/tags/tags.component';
import { SubscribeComponent } from './sidebar/subscribe/subscribe.component';
import { WidgetDefaultComponent } from './sidebar/widget-default/widget-default.component';
import { DefaultCardComponent } from './cards/default-card/default-card.component';
import { ButtonPrimaryComponent } from './buttons/button-primary/button-primary.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LayoutSidebarComponent } from './layout/sidebar/sidebar.component'
import { FormatDatePipe } from './pipes/format-date.pipe';
import { CategoryNamePipe } from './pipes/category-name.pipe';

@NgModule({
  declarations: [
    BigCardComponent,
    FeaturedCardComponent,
    ArticleCardComponent,
    HeaderComponent,
    FooterComponent,
    MenuIconsComponent,
    MenuTxtComponent,
    MenuMobileComponent,
    LogoComponent,
    MenuSocialComponent,
    SocialComponent,
    SidebarComponent,
    FeaturedArticlesComponent,
    TagsComponent,
    SubscribeComponent,
    WidgetDefaultComponent,
    DefaultCardComponent,
    ButtonPrimaryComponent,
    BreadcrumbComponent,
    LayoutSidebarComponent,
    FormatDatePipe,
    CategoryNamePipe    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LayoutSidebarComponent,
    BigCardComponent,
    FeaturedCardComponent,
    ArticleCardComponent,
    BreadcrumbComponent,
    MenuSocialComponent,
    FormatDatePipe,
    CategoryNamePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
