import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {

  @Input() isSplashHidden: boolean = false;
  windowWidth: string;

  constructor() { }

  ngOnInit(): void {
    if (this.isSplashHidden) {
      this.windowWidth = "-" + window.innerWidth + "px";
    }
  }


}
