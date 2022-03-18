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
    image: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
  };
  bullets = [
    {
      title: "Veloce",
      description: "Una grande priorità è ottenere i caricamenti rapidi durante le interazioni.",
      image: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
    },
    {
      title: "Semplice",
      description: "\"Keep it simple\".",
      image: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
    },
    {
      title: "Dinamico",
      description: "I vari layouts devono adattarsi a ogni forma, grande o piccola che sia.",
      image: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
    },
    {
      title: "Curioso",
      description: "Scoprire nuovi approcci metodologici.",
      image: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
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
      languages: [
        "Programmazione iOS/iPad",
        "Swift"
      ],
      image: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
    },
    {
      title: "RAI Front-End",
      languages: [
        "JavaScript",
        "CSS",
        "HTML",
        "XSL",
        "SQL",
        "MongoDB"
      ],
      image: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
    },
    {
      title: "RaiPlay tvOS",
      languages: [
        "Programmazione tvOS",
        "Swift"
      ],
      image: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
    }
  ];
  hobbies = [
    {
      title: "Teatro - Recitazione",
      image: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
    },
    {
      title: "Fitness",
      image: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
    },
    {
      title: "Corsa",
      image: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
    },
    {
      title: "Lettura",
      image: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
    }
  ];
  contacts = [
    {
      type: "Email",
      url: "mailto:valerio.dellefave00@gmail.com",
      icon: "email"
    },
    {
      type: "Facebook",
      url: "https://www.facebook.com/valerio.dellefave",
      icon: "facebook"
    },
    {
      type: "GitHub",
      url: "https://github.com/ValeriodelleFave",
      icon: "github"
    },
    {
      type: "Instagram",
      url: "https://www.instagram.com/valerio_dellefave",
      icon: "instagram"
    },
    {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/valerio-delle-fave",
      icon: "linkedin"
    },
  ];
  copyrightText = "Copyright © Valerio delle Fave. All Rights Reserved.";
}
