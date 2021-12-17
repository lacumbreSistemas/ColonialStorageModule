import { Injectable, Query } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pedidos } from '../models/pedidos.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  Pedidos: any[] = [];

  constructor(private firestore: AngularFirestore) {
    this.obtenerPedidosPendientes('juan@gmai', 10, [1, 1]);
  }

  obtenerPedidosPendientes(email: string, limite: number, estado: number[]) {
    return this.firestore.collection('Pedidos',
      ref => ref.
        where('PagoConfirmado', '==', true).where('Estado', 'in', estado).
        where('Usuario.email', '==', email)
        .limit(limite)
        .orderBy('Numero', 'asc')
    ).valueChanges()
      .pipe(
        map((pedidos: any) => {
          this.Pedidos = [];
          for (let pedido of pedidos) {
            this.Pedidos.push(new Pedidos(pedido));
          }
          return this.Pedidos
        }
        )
      )
  }

  // NumeroDocumentos(email:string){
  //  this.firestore.collection('Pedidos', ref => ref.where('PagoConfirmado', '==', true)
  // .where('Estado', 'in', [3]).where('Usuario.email','==',email)).get().toPromise().then(function(Cantidad){      
  //   console.log('Cantidad',Cantidad.size); 
  // })
  // }



}
