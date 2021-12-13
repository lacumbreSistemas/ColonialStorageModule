import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Usuarios } from '../models/usuarios.model';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  Usuario: Usuarios[] = []; 
  constructor(private firestore: AngularFirestore) { 

  }



  ObtenerUsuario(email:string) {
    return this.firestore.collection('users', ref => ref.
      where('email','==',email)
        ).valueChanges()
          .pipe(
             map((usuarios:any ) => {                
              return new Usuarios(usuarios[0])  
        } 
        )
      )  
  }

  ActualizarUsuario(Usuario:Usuarios){
    return this.firestore.collection("users").doc(Usuario.uid).ref.update(Usuario)

  }

}
