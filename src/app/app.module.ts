import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { RepositorioModule } from './repositorio/repositorio.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
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
    SwiperModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
