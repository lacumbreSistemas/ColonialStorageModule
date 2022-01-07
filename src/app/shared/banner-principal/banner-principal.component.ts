import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/repositorio/servicios/storage.service';
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
  
@Component({
  selector: 'app-banner-principal',
  templateUrl: './banner-principal.component.html',
  styleUrls: ['./banner-principal.component.scss']
})
export class BannerPrincipalComponent implements OnInit {

  constructor(private storageS: StorageService) { }
  slidesStore :any= [];
  ngOnInit() {
this.storageS.BannerPrincipal().then(data=>{
  this.slidesStore = data
  console.log('data', data)
})
  }

}
