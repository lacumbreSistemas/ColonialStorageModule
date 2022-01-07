import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StorageService } from 'src/app/repositorio/servicios/storage.service';
import SwiperCore, { Navigation } from "swiper";
import Swiper, { Autoplay} from 'swiper';
Swiper.use([Autoplay])
SwiperCore.use([Navigation]);
@Component({
  selector: 'app-banner-principal',
  templateUrl: './banner-principal.component.html',
  styleUrls: ['./banner-principal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BannerPrincipalComponent implements OnInit {
  SlideImages:any=[]

  constructor(private storageS: StorageService) { }

  ngOnInit() {
    this.storageS.BannerPrincipal().then(data=>{
      this.SlideImages = data
      console.log('data', data)
    })
  }
  onSlideChange(swiper: any) {
    swiper.params.autoplay.delay = 1000 * this.SlideImages[swiper.realIndex].duration;
 }
  swiperConfig: any = {
    slidesPerView: '1',
    slideToClickedSlide: true,
    lazy: false,
    loop:true,
    initialSlide : 1,
    direction:'horizontal',
    slideShadows: true,
    breakpoints: {
            736: {
                    slidesPerView: '1'
            },
            1200: {
                slidesPerView: '1'
        }




    }
  
  }
}
