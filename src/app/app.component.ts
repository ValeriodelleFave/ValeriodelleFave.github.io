import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  presentationTitle = "Ciao, sono <b>Valerio delle Fave</b>. <br>Sono uno sviluppatore Front-End.";
  menuItems = [
    {
      name: "Intro",
      link: "#presentation"
    },
    {
      name: "About",
      link: "#about"
    },
    {
      name: "Projects",
      link: "#projects"
    },
    {
      name: "Hobby",
      link: "#hobby"
    },
    {
      name: "Contacts",
      link: "#contact"
    }
  ];
  specialBullet = {
    title: "Chi è questo tizio?",
    description: "Attualmente, sono uno sviluppatore Front-End residente a Roma. Ho una passione per il mondo IT, mi piace fornire soluzioni innovative implementando diverse strategie di ottimizzazione e risoluzione del caso.",
    image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
  };
  bullets = [
    {
      title: "Veloce",
      description: "Una grande priorità è ottenere i caricamenti rapidi durante le interazioni.",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      title: "Semplice",
      description: "\"Keep it simple\".",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      title: "Dinamico",
      description: "I vari layouts devono adattarsi a ogni forma, grande o piccola che sia.",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      title: "Curioso",
      description: "Scoprire nuovi approcci metodologici.",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
  ];
  skills = [
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
    },
  ];
  projects = [
    {
      title: "RaiPlay iOS",
      subtitle: "Sottotitolo",
      description: "Descrizione molto lunga",
      languages: [
        "Programmazione iOS/iPad",
        "Swift"
      ],
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
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
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      title: "RaiPlay tvOS",
      subtitle: "Sottotitolo",
      description: "Descrizione molto lunga",
      languages: [
        "Programmazione tvOS",
        "Swift"
      ],
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    }
  ];
  hobbies = [
    {
      title: "Teatro - Recitazione",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      title: "Fitness",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      title: "Corsa",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      title: "Lettura",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      title: "Teatro - Recitazione",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      title: "Fitness",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      title: "Corsa",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      title: "Lettura",
      image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    }
  ];
  contacts = [
    {
      type: "Email",
      url: "mailto:valerio.dellefave00@gmail.com",
      icon: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      type: "Facebook",
      url: "https://www.facebook.com/valerio.dellefave",
      icon: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      type: "GitHub",
      url: "https://github.com/ValeriodelleFave",
      icon: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      type: "Instagram",
      url: "https://www.instagram.com/valerio_dellefave",
      icon: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/valerio-delle-fave",
      icon: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
  ];
  copyrightText = "Copyright © Valerio delle Fave. All Rights Reserved.";
}
