import {  NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { RepositorioModule } from './repositorio/repositorio.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BannerPrincipalComponent } from './shared/banner-principal/banner-principal.component';
import { ItemListComponent } from './shared/item-list/item-list.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerPrincipalComponent,
    ItemListComponent,
    NavBarComponent,
    FooterComponent,
    TopBarComponent,

    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RepositorioModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
