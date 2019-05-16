import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyLoansComponent } from './my-loans/my-loans.component';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyLoansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
