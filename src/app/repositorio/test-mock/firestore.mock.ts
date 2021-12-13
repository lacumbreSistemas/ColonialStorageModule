import { AngularFirestore } from "@angular/fire/compat/firestore";
import { of } from "rxjs";
import { articulosMock } from "./firestore-data/articulos2.data.mock";
import { departamentosMock } from "./firestore-data/departamentos.data.mock";
import { pedidosMock } from "./firestore-data/pedidos.data.mock";


export const AngularFirestoreMock = {
    collection: (path: string, ref?:any)=> {
        if (path === 'Articulos2') {
            return {
                valueChanges: () => of(articulosMock)
            }
        }
        if (path === 'Departamentos') {
            return {
                valueChanges: () => of(departamentosMock)
            }
        }

        if (path === 'Pedidos') {
            let Referencia=(ref)
            console.info('Referencia', Referencia)           
            return {
                valueChanges: () => of(pedidosMock)  

              }
                         
        }
      

       return {valueChanges: () => of(null)}
    }
}