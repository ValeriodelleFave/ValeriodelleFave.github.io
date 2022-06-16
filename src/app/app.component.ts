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
  public languages: any[] = [
    {
      lang: "IT",
      name: "Italiano"
    },
    {
      lang: "EN",
      name: "English"
    },
    {
      lang: "ES",
      name: "Español"
    }
  ];
  public menuItems: any[];
  public presentationTitle: string;
  public projects: any[];
  public selectedOption = "IT";
  public sections: any[];
  public showSplash: boolean;
  public skills: any[];
  public specialBullet: any;

  constructor(private networkManager: NetworkManager) { }

  ngOnInit() {
    this.setLanguage(this.selectedOption);
    this.setSkills();
    this.setContacts();
  }

  changeLang() {
    this.setLanguage(this.selectedOption);
  }

  private setLanguage(language: string) {
    this.networkManager.get<Language>("language", { language: language }).subscribe(res => {
      this.presentationTitle = res?.presentationTitle;
      this.menuItems = res?.menuItems;
      this.sections = res?.sections;
      this.specialBullet = res?.specialBullet;
      this.bullets = res?.bullets;
      this.projects = res?.projects;
      this.hobbies = res?.hobbies;
      this.copyrightText = res?.copyrightText;
      this.showSplash = true;
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
