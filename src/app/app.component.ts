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

  public sections: any[] = [
    {
      type: "about",
      title: "About",
      content: [ ]
    },
    {
      type: "project",
      title: "Project",
      content: [ ]
    },
    {
      type: "hobby",
      title: "Hobby",
      content: [ ]
    },
    {
      type: "contact",
      title: "Contacts",
      content: [ ]
    }
  ];

  constructor() { }

  ngOnInit() {
    this.setSkills();
    this.setItalianLanguage();
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
    this.presentationTitle = "Ciao!<br>Sono <b>Valerio delle Fave</b>."
    this.menuItems = [
      {
        name: "Intro",
        link: "#presentation",
        image: "../assets/icons/nav/presentation.png"
      },
      {
        name: "About",
        link: "#about",
        image: "../assets/icons/nav/about.png"
      },
      {
        name: "Projects",
        link: "#project",
        image: "../assets/icons/nav/projects.png"
      },
      {
        name: "Hobby",
        link: "#hobby",
        image: "../assets/icons/nav/hobbies.png"
      },
      {
        name: "Contacts",
        link: "#contact",
        image: "../assets/icons/nav/contact.png"
      }
    ]
    this.specialBullet = {
      title: "Chi è questo tizio?",
      description: "Attualmente, sono uno sviluppatore Front-End residente a Roma. Ho una passione per il mondo IT, mi piace fornire soluzioni innovative implementando diverse strategie di ottimizzazione e risoluzione del caso.",
      image: "../assets/placeholders/placeholder_250x300.png"
    };
    this.bullets = [
      {
        title: "Veloce",
        description: "Una grande priorità è ottenere i caricamenti rapidi durante le interazioni.",
        image: "../assets/placeholders/placeholder_100x100.png"
      },
      {
        title: "Semplice",
        description: "\"Keep it simple\".",
        image: "../assets/placeholders/placeholder_100x100.png"
      },
      {
        title: "Dinamico",
        description: "I vari layouts devono adattarsi a ogni forma, grande o piccola che sia.",
        image: "../assets/placeholders/placeholder_100x100.png"
      },
      {
        title: "Curioso",
        description: "Scoprire nuovi approcci metodologici.",
        image: "../assets/placeholders/placeholder_100x100.png"
      }
    ];
    this.projects = [
      {
        title: "RaiPlay iOS",
        subtitle: "Sottotitolo",
        description: "Descrizione molto lunga",
        languages: [
          "Programmazione iOS/iPad",
          "Swift"
        ],
        image: "../assets/placeholders/placeholder_200x200.png"
      },
      {
        title: "RAI Front-End",
        subtitle: "Sottotitolo",
        description: "Descrizione molto lunga",
        languages: [
          "JavaScript",
          "CSS",
          "HTML",
          "XSL",
          "SQL",
          "MongoDB"
        ],
        image: "../assets/placeholders/placeholder_200x200.png"
      },
      {
        title: "RaiPlay tvOS",
        subtitle: "Sottotitolo",
        description: "Descrizione molto lunga",
        languages: [
          "Programmazione tvOS",
          "Swift"
        ],
        image: "../assets/placeholders/placeholder_200x200.png"
      }
    ];
    this.hobbies = [
      {
        title: "Teatro - Recitazione",
        image: "../assets/placeholders/placeholder_200x200.png"
      },
      {
        title: "Fitness",
        image: "../assets/placeholders/placeholder_200x200.png"
      },
      {
        title: "Corsa",
        image: "../assets/placeholders/placeholder_200x200.png"
      },
      {
        title: "Lettura",
        image: "../assets/placeholders/placeholder_200x200.png"
      }
    ];
    this.contacts = [
      {
        type: "Email",
        url: "mailto:valerio.dellefave00@gmail.com",
        icon: "../assets/icons/social/email.png"
      },
      {
        type: "Facebook",
        url: "https://www.facebook.com/valerio.dellefave",
        icon: "../assets/icons/social/facebook.png"
      },
      {
        type: "GitHub",
        url: "https://github.com/ValeriodelleFave",
        icon: "../assets/icons/social/github.png"
      },
      {
        type: "Instagram",
        url: "https://www.instagram.com/valerio_dellefave",
        icon: "../assets/icons/social/instagram.png"
      },
      {
        type: "LinkedIn",
        url: "https://www.linkedin.com/in/valerio-delle-fave",
        icon: "../assets/icons/social/linkedin.png"
      },
    ];
    this.copyrightText = "Copyright © Valerio delle Fave. All Rights Reserved.";
  }

}

enum Types {
  About = "about",
  Project = "project",
  Hobby = "hobby"
}
