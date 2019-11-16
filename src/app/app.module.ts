import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstLookComponent } from './first-look/first-look.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FeaturesComponent } from './features/features.component';
import { ImagesComponent } from './images/images.component';
import { I18nService } from './i18n.service';
import { HttpClientModule } from '@angular/common/http';
import { LegalComponent } from './legal/legal.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstLookComponent,
    MenuBarComponent,
    FeaturesComponent,
    ImagesComponent,
    LegalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [I18nService],
  bootstrap: [AppComponent]
})
export class AppModule { }
