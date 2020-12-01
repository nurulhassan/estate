import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig] 
})
export class CarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {

    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  ngOnInit() {
  }

}
