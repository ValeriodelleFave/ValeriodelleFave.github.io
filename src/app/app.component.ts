import { NetworkManager } from './../services/networkManager';
import { Component } from '@angular/core';
import * as it from "../assets/data/it-language.json";
import * as en from "../assets/data/en-language.json";
import * as es from "../assets/data/es-language.json";

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

  private it = (it as any).default;
  private en = (en as any).default;
  private es = (es as any).default;

  constructor(private networkManager: NetworkManager) { }

  ngOnInit() {
    this.setSkills();

    this.networkManager.get("https://my-endpoints.herokuapp.com/match").subscribe(res => {
      let a = res;
      debugger

    });

    this.setItalianLanguage();
  }

  setLanguage(language: string) {
    if (language == "IT") this.setItalianLanguage()
    else if (language == "EN") this.setEnglishLanguage()
    else this.setSpanishLanguage()
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

  private setItalianLanguage() {
    this.presentationTitle = this.it.presentationTitle;
    this.menuItems = this.it.menuItems;
    this.sections = this.it.sections;
    this.specialBullet = this.it.specialBullet;
    this.bullets = this.it.bullets;
    this.projects = this.it.projects;
    this.hobbies = this.it.hobbies;
    this.contacts = this.it.contacts;
    this.copyrightText = this.it.copyrightText;
  }

  private setEnglishLanguage() {
    this.presentationTitle = this.en.presentationTitle;
    this.menuItems = this.en.menuItems;
    this.sections = this.en.sections;
    this.specialBullet = this.en.specialBullet;
    this.bullets = this.en.bullets;
    this.projects = this.en.projects;
    this.hobbies = this.en.hobbies;
    this.contacts = this.en.contacts;
    this.copyrightText = this.en.copyrightText;
  }

  private setSpanishLanguage() {
    this.presentationTitle = this.es.presentationTitle;
    this.menuItems = this.es.menuItems;
    this.sections = this.es.sections;
    this.specialBullet = this.es.specialBullet;
    this.bullets = this.es.bullets;
    this.projects = this.es.projects;
    this.hobbies = this.es.hobbies;
    this.contacts = this.es.contacts;
    this.copyrightText = this.es.copyrightText;
  }

}

enum Types {
  About = "about",
  Project = "project",
  Hobby = "hobby",
  ColoursWheel = "color-wheel"
}
