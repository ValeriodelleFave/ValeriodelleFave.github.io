import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {
  // Rivedere la logica
  // cambiare lo showSplash dal componente app
  windowWidth: string = "";
  showSplash = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.windowWidth = "-" + window.innerWidth + "px";

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 2500);
  }


}
