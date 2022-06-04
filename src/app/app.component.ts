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
    this.setSkills();
    this.setLanguage("IT");
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
    this.skills = [
      {
        name: "JavaScript",
        value: 80
      },
      {
        name: "CSS",
        value: 80
      },
      {
        name: "Swift",
        value: 50
      },
      {
        name: "HTML",
        value: 90
      },
      {
        name: "Node.js",
        value: 60
      },
      {
        name: "MongoDB",
        value: 40
      },
      {
        name: "SQL",
        value: 40
      }
    ];
  }

}

enum Types {
  About = "about",
  Project = "project",
  Hobby = "hobby",
  ColoursWheel = "color-wheel"
}
