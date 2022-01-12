import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }
  config = {
   
    allowTouchMove: true,
    allowSlideNext: true,
    navigation: {
      nextEl: '.button-next-',
      prevEl: '.button-prev-' 
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      676: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1118: {
        slidesPerView: 4,
        spaceBetween: 15,

      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 15,

      }
    }
  };

  ngOnInit(): void {
  }

}
