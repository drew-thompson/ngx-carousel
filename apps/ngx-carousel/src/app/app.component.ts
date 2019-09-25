import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '@ngx-carousel/data/models';

@Component({
  selector: 'ngx-carousel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-carousel';

  cages = ['', 'g', 'c', 'gif'].sort(() => Math.random() - 0.5);
  items: CarouselItem[];

  constructor() {
    this.items = this.cages.map(cage => {
      const insert = cage ? `${cage}/` : '';
      return { image: { url: `https://www.placecage.com/${insert}200/300` } };
    });
  }

  ngOnInit() {}
}
