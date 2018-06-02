import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GradientComponent } from './gradient/gradient.component';
import { BoxshadowComponent } from './boxshadow/boxshadow.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GradientComponent,
    BoxshadowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
