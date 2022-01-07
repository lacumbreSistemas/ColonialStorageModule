import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { RepositorioModule } from './repositorio/repositorio.module';
import { BannerPrincipalComponent } from './shared/banner-principal/banner-principal.component';
import { ItemListComponent } from './shared/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerPrincipalComponent,
    ItemListComponent,
    
  ],
  imports: [
    BrowserModule,
    RepositorioModule,
    SwiperModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
