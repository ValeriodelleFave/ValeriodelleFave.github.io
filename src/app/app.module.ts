import { DetailComponent } from './../components/detail/detail.component';
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
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    ColorWheelComponent,
    SplashScreenComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [
    NetworkManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
