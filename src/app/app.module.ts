import { NetworkManager } from './../services/networkManager';
import { ColorWheelComponent } from './../components/color-wheel/color-wheel.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";

// Material
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { SplashScreenComponent } from 'src/components/splash/splash-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorWheelComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    FormsModule
  ],
  providers: [
    NetworkManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
