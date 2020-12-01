import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-single-listing',
  templateUrl: './single-listing.component.html',
  styleUrls: ['./single-listing.component.scss']
})
export class SingleListingComponent implements OnInit {
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  constructor() {}

  ngOnInit() {}
}

export class NgbdCarouselBasic {
 
}