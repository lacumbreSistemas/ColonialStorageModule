import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { DepartamentosServices } from './servicios/departamentos.service';
import { ProductosService } from './servicios/productos.service';
import { PedidosService } from './servicios/pedidos.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ], 
  providers:[DepartamentosServices, ProductosService,

  
  ]
})
export class RepositorioModule {
  constructor (private productoService: ProductosService,
               private departamentoService: DepartamentosServices,
               pedidosServicio:PedidosService) {
    productoService.ObtenerProductos();
    departamentoService.ObtenerCategorias()
            
  //  departamentoService.CategoriaSeleccionada("5","1")


 }
}