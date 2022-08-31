import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-wheel',
  templateUrl: './color-wheel.component.html',
  styleUrls: ['./color-wheel.component.css']
})
export class ColorWheelComponent implements OnInit {

  constructor() { }

  primaryColors = ["giallo", "rosso", "blu"];
  secondaryColors = ["arancione", "viola", "verde"];
  tertiaryColors = ["giallo arancione", "rosso arancione", "rosso viola", "blu viola", "blu verde", "verde giallo"];

  hotColors = ["giallo", "giallo arancione", "arancione", "rosso arancione", "rosso", "rosso viola"];
  coldColors = ["viola", "blu viola", "blu", "blu verde", "verde", "verde giallo"];

  rules = {
    monocromatici: "",
    analoghi: "",
    analoghi_ampliati: "",
    complementari: "",
    complementari_divergenti: "",
    triade: "",
    quartetto: "",
  }

  ngOnInit(): void {
  }

}
