import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {

  @Input() showSplash: boolean;
  windowWidth: string;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.windowWidth = "-" + window.innerWidth + "px";
    }, 2500);
  }


}
