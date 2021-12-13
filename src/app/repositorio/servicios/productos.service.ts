import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, combineLatest, merge, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Articulos2 } from '../models/articulos2.interface';
import { CategoriaSeleccionada } from '../models/categoriaSeleccionada.interface';
import { Producto } from '../models/producto.model';
import { DepartamentosServices } from './departamentos.service';
@Injectable()
export class ProductosService {
  public Productos = new BehaviorSubject<Producto[]>([]);

  constructor(private firestore: AngularFirestore,
    private departamentoServicio: DepartamentosServices) {

    this.ObtenerProductos().subscribe((productos: any) => {
      this.Productos.next(productos);
    });


  }


  ObtenerProductos(): Observable<Producto[]> {
    return this.firestore.collection<Articulos2>('Articulos2').valueChanges().pipe(
      map((articulos2) => {
        let productos: Producto[] = [];
        articulos2.forEach(articulo2 => {
          articulo2.Items.forEach(producto => {
            productos.push(new Producto(producto));
          });
        });
        return productos;
      })
    )
  }



  ObtenerProductosPorDepto() {

    return combineLatest([this.Productos, this.departamentoServicio.categoriasSeleccionada]).pipe(
      map(res => {
        let Productos = res[0];
        let categoria = res[1];

        if (categoria !== null) {
          return Productos.filter((producto: Producto) => producto.Categoria === parseInt(categoria!.categoriaId) && producto.Departamento === parseInt(categoria!.departamentoID))
        }

        return Productos
      })
    )
  }

  ObtenerProductosPorSku(codigo: string) {
    return this.Productos.pipe(
      map(productos => {
        return productos.filter((producto: Producto) => producto.sku === codigo)[0]
      }

      )
    )
  }


}
