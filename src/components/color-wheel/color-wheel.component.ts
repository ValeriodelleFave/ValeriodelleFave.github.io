import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-wheel',
  templateUrl: './color-wheel.component.html',
  styleUrls: ['./color-wheel.component.css']
})
export class ColorWheelComponent implements OnInit {

  primaryColors: any[] =   [];
  secondaryColors: any[] = [];
  tertiaryColors: any[] =  [];

  hotColors = ["giallo", "giallo arancione", "arancione", "rosso arancione", "rosso", "rosso viola"];
  coldColors = ["viola", "blu viola", "blu", "blu verde", "verde", "verde giallo"];

  rules = {
    monocromatici: "insieme diverse sfumature dello stesso colore",
    analoghi: "Colori analoghi sono quelli che contengono un colore comune, e si trovano uno accanto all'altro sulla ruota,",
    analoghi_ampliati: "comprende lo stesso schema di colori analoghi e si estende alla gamma di colori vicini. ",
    complementari: "Si scelgono colori opposti sul cerchio cromatico",
    complementari_equidistanti: "L’importante in questo tipo di abbinamento è che i colori abbiano lo stesso valore tonale, o tutti e tre tenui o tutti e tre brillanti.",
    complementari_divergenti: "Si sceglie un colore e poi si prendono i colori a destra e a sinistra del suo complementare.",
  }

  allColors = [
    {
      id: 1,
      name: "giallo",
      style: "#FFFF00"
    },
    {
      id: 2,
      name: "giallo arancione",
      style: "#FFAE42"
    },
    {
      id: 3,
      name: "arancione",
      style: "#FFA500"
    },
    {
      id: 4,
      name: "rosso arancione",
      style: "#FF5349"
    },
    {
      id: 5,
      name: "rosso",
      style: "#FF0000"
    },
    {
      id: 6,
      name: "rosso viola",
      style: "#F75394"
    },
    {
      id: 7,
      name: "viola",
      style: "#8F00FF"
    },
    {
      id: 8,
      name: "blu viola",
      style: "#8A2BE2"
    },
    {
      id: 9,
      name: "blu",
      style: "#0000FF"
    },
    {
      id: 10,
      name: "blu verde",
      style: "#0D98BA"
    },
    {
      id: 11,
      name: "verde",
      style: "#00FF00"
    },
    {
      id: 12,
      name: "verde giallo",
      style: "#ADFF2F"
    }
  ]

  selectedColor = {
    title: "title",
    description: "description",
  };

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.allColors.length; i++) {
      const color = this.allColors[i].name;
      if (i == 0 || i == 4 || i == 8) {
        this.primaryColors.push(color);
      }
      if (i == 2 || i == 6 || i == 10) {
        this.secondaryColors.push(color);
      }
      if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9 || i == 11) {
        this.tertiaryColors.push(color);
      }
    }
  }

  showColor(el: any) {
    debugger
    this.selectedColor = el
    console.log(el)
  }

}
