import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RepositorioModule } from './repositorio/repositorio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RepositorioModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
