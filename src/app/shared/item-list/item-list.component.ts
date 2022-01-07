import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }
  swiperConfig: any = {
    slidesPerView: '1',
    allowTouchMove:true,
    slideToClickedSlide: true,
    spaceBetween:5,
    lazy: false,
    loop:true,
    initialSlide : 1,
    direction:'horizontal',
    slideShadows: true,
    breakpoints: {
            400: {
                    slidesPerView: '2'
            },
            1200: {
                slidesPerView: '3'
        },
            1280: {
                slidesPerView: '5'
        }




    }
  
  }
  ngOnInit(): void {
  }

}
