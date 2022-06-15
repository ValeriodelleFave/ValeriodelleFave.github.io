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

  public presentationTitle: string = "";
  public menuItems: any[] = [];
  public specialBullet: any;
  public bullets: any[] = [];
  public skills: any[] = [];
  public projects: any[] = [];
  public hobbies: any[] = [];
  public contacts: any[] = [];
  public copyrightText: string = "";
  public certifications: any[] = [];
  public graduates: any[] = [];
  public languages: any[] = [
    {
      lang: "IT",
      name: "Italiano",
      content: { }
    },
    {
      lang: "EN",
      name: "English",
      content: { }
    },
    {
      lang: "ES",
      name: "Español",
      content: { }
    },
  ]
  public sections: any[] = [
    {
      type: "about",
      title: "About",
      content: [ ]
    },
    { //inserire le sezioni nel json
      type: "color-wheel",
      title: "Color wheel",
      content: [ ]
    },
    {
      type: "contact",
      title: "Contacts",
      content: [ ]
    }
  ];
  selectedOption = "IT";

  constructor(private networkManager: NetworkManager) { }

  ngOnInit() {
    this.setLanguage("IT");
    this.setSkills();
    this.setContacts();
  }

  setLanguage(language: string) {
    this.networkManager.get<Language>("https://my-endpoints.herokuapp.com/language", { language: language }).subscribe(res => {
      this.presentationTitle = res?.presentationTitle;
      this.menuItems = res?.menuItems;
      this.sections = res?.sections;
      this.specialBullet = res?.specialBullet;
      this.bullets = res?.bullets;
      this.projects = res?.projects;
      this.hobbies = res?.hobbies;
      this.contacts = res?.contacts;
      this.copyrightText = res?.copyrightText;
    });
  }

  changeLang() {
    this.setLanguage(this.selectedOption)
  }

  private setSkills() {
    this.networkManager.get<Skill[]>("https://localhost:3000/skills").subscribe(res => {
      this.skills = res;
    });
  }

  private setContacts() {
    this.networkManager.get<Contact[]>("https://localhost:3000/contacts").subscribe(res => {
      this.contacts = res;
    });
  }

}

enum Types {
  About = "about",
  Project = "project",
  Hobby = "hobby",
  ColoursWheel = "color-wheel"
}
