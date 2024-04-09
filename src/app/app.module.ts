import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageRoutingModule } from './modules/homepage/homepage-routing.module';
import { HomepageModule } from './modules/homepage/homepage.module';
import { LCommonModule } from './common/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageRoutingModule,
    HomepageModule,
    LCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
