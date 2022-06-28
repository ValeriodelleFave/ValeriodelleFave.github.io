import { Contact } from './../models/contact.model';
import { Skill } from './../models/skill.model';
import { Language } from './../models/language.model';
import { NetworkManager } from './../services/networkManager';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public bullets: any[];
  public certifications: any[];
  public contacts: any[];
  public copyrightText: string;
  public graduates: any[];
  public hobbies: any[];
  public languages: any[];
  public menuItems: any[];
  public presentationTitle: string;
  public projects: any[];
  public selectedOption = "IT";
  public sections: any[];
  public isSplashHidden: boolean;
  public skills: any[];
  public specialBullet: any;

  constructor(private networkManager: NetworkManager) { }

  ngOnInit() {
    this.getLanguages();
    this.setLanguage(this.selectedOption);
    this.setSkills();
    this.setContacts();
  }

  changeLang() {
    this.setLanguage(this.selectedOption);
  }

  private setLanguage(language: string) {
    this.networkManager.get<Language>("language", { language: window.navigator.language }).subscribe(res => {
      debugger
      this.selectedOption = res?.language;
      this.presentationTitle = res?.data?.presentationTitle;
      this.menuItems = res?.data?.menuItems;
      this.sections = res?.data?.sections;
      this.specialBullet = res?.data?.specialBullet;
      this.bullets = res?.data?.bullets;
      this.projects = res?.data?.projects;
      this.hobbies = res?.data?.hobbies;
      this.copyrightText = res?.data?.copyrightText;
      this.isSplashHidden = true;
    });
  }

  private getLanguages() {
    this.networkManager.get<any[]>("languages").subscribe(res => {
      this.languages = res;
    });
  }
  private setSkills() {
    this.networkManager.get<Skill[]>("skills").subscribe(res => {
      this.skills = res;
    });
  }

  private setContacts() {
    this.networkManager.get<Contact[]>("contacts").subscribe(res => {
      this.contacts = res;
    });
  }

}
