import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-my-loans',
  templateUrl: './my-loans.component.html',
  styleUrls: ['./my-loans.component.scss']
})
export class MyLoansComponent implements OnInit {

  ids = 0;

  cards = [
    {
    lend: '15800',
    duration: '90 days',
    currency: 'RCN',
    percentaje: '10%',
    id: 0,
    },
    {
    lend: '800',
    duration: '84 days',
    currency: 'DAI',
    percentaje: '10%',
    id: 0,
    },
    {
    lend: '1800',
    duration: '50 days',
    currency: 'RCN',
    percentaje: '10%',
    id: 0,
    },
    {
    lend: '5800',
    duration: '30 days',
    currency: 'DAI',
    percentaje: '10%',
    id: 0,
    },
    {
    lend: '1580',
    duration: '10 days',
    currency: 'RCN',
    percentaje: '10%',
    id: 0,
    },
  ];

  public carouselTileItems: Array<any> = [0, 1, 2, 3, 4, 5];
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  constructor() { }

  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };

  whatCard(event) {
    let element = document.getElementById(event.srcElement.id)
    if (element.classList.contains("red")) {
      element.classList.remove("red")
     } else {
      element.classList.add("red")
     }
  }

  ngOnInit() {
    for (let i = 0; i < this.cards.length; i++) {
      this.ids = this.ids + 1
      this.cards[i].id = this.ids
      console.info(this.cards[i].id)
    }

    this.carouselTileItems.forEach(el => {
      this.carouselTileLoad(el);
    });

   
}

public carouselTileLoad(j) {
  // console.log(this.carouselTiles[j]);
  const len = this.carouselTiles[j].length;
  if (len <= 30) {
    for (let i = len; i < len + 15; i++) {
      this.carouselTiles[j].push(
        this.cards[Math.floor(Math.random() * this.cards.length)]
      );
    }
  }

}
}

