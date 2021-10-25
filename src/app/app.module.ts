import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PresentationComponent,
    SkillsComponent,
    HobbyComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
