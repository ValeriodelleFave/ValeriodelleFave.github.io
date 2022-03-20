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
      image: "../assets/images/bullets/speed.png"
    },
    {
      title: "Semplice",
      description: "\"Keep it simple\".",
      image: "../assets/images/bullets/simple.png"
    },
    {
      title: "Dinamico",
      description: "I vari layouts devono adattarsi a ogni forma, grande o piccola che sia.",
      image: "../assets/images/bullets/dynamic.png"
    },
    {
      title: "Curioso",
      description: "Scoprire nuovi approcci metodologici.",
      image: "../assets/images/bullets/curious.png"
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
      image: "../assets/images/projects/logo_RAI.png"
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
      image: "../assets/images/projects/logo_raiplay.png"
    },
    {
      title: "RaiPlay tvOS",
      subtitle: "Sottotitolo",
      description: "Descrizione molto lunga",
      languages: [
        "Programmazione tvOS",
        "Swift"
      ],
      image: "../assets/images/projects/logo_RAI.png"
    }
  ];
  hobbies = [
    {
      title: "Teatro - Recitazione",
      image: "../assets/images/hobbies/teatro.png"
    },
    {
      title: "Fitness",
      image: "../assets/images/hobbies/fitness.png"
    },
    {
      title: "Corsa",
      image: "../assets/images/hobbies/running.png"
    },
    {
      title: "Lettura",
      image: "../assets/images/hobbies/reading.png"
    }
  ];
  contacts = [
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
  copyrightText = "Copyright © Valerio delle Fave. All Rights Reserved.";


}

