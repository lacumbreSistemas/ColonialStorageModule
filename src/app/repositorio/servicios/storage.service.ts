import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat//storage';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  slidesStore = [] as  any;

  constructor(private storage: AngularFireStorage) {


   }


BannerPrincipal(){
  return  this.storage.storage.ref('Publicidad/BannerPrincipal/').listAll().then(data => {
      data.items.forEach(element => {
        let contador = 0
        element.getDownloadURL().then(data => {
       
          this.slidesStore.push(
            
            {
              id: contador + 1,
              src: data,
            }
          );

          contador++;
        });
      });
      return this.slidesStore
    });
  }

}
