import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, merge, Subscription } from 'rxjs';
import { CategoriaSeleccionada } from './repositorio/models/categoriaSeleccionada.interface';

import { Producto } from './repositorio/models/producto.model';

import { DepartamentosServices } from './repositorio/servicios/departamentos.service';
import { PedidosService } from './repositorio/servicios/pedidos.service';
import { ProductosService } from './repositorio/servicios/productos.service';
import { UsuariosService } from './repositorio/servicios/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Repositorio';
 NumeroLimite :number =10
pedidos!:Subscription
Deshabilitar:boolean=false;
TodosPedidos:any=[]
  productos :any=[]
  CategoriaSelecta = new BehaviorSubject<CategoriaSeleccionada[]>([]);

  constructor(
    private productoServicio: ProductosService
   /* private productoServicio: ProductosService,
    private departamentoServicio: DepartamentosServices,
    private pedidoServicio:PedidosService,
    private UsuariosService:UsuariosService*/
    
    
    
    ) {

  }
  ngOnInit() {
  //   this.pedidoServicio.NumeroDocumentos('rommelmontenegro@yahoo.com')
  //   this.productoServicio.ObtenerProductosPorDepto().subscribe(producto => {  
  //      });
  //       setTimeout(() => {
  //        this.mandarCategoria('3','2');
  //   }, 5000); 
  // this.buscarPedidoPorEmail('rommelmontenegro@yahoo.com', 3)
  // this.ObtenerUsuario('mimipineda.dp@gmail.com')
  }





  mandarCategoria(Departamento: string, Categoria: string) {
    // this.departamentoServicio.CategoriaSeleccionada(Departamento, Categoria)
  }



  BuscarPorCodigo(codigo:string){

    
 this.productoServicio.ObtenerProductosPorSku(codigo).subscribe(producto=>{
        this.productos  = producto
     })

  }

  // BuscarPorCodigo(){

  //   this.productos  = [
  //     {
  //       id:1,
  //       Nombre:"Coca Cola",
  //       sku:"10101010101"
  //     }
  //   ]
  

  // }

  buscarPedidoPorEmail(email:string, Estado:number){

    // if(this.pedidos){

    //   this.pedidos.unsubscribe()
    // }
    //   this.pedidos= this.pedidoServicio.ObtenerPedidosPendientes(email, this.NumeroLimite, Estado).subscribe(pedido=>{   
     
    //     this.TodosPedidos =pedido
    //     console.log('TodosPedidos', this.TodosPedidos)
      
    //     if(this.NumeroLimite>this.TodosPedidos.length){
    //       this.Deshabilitar = true
    //     }
    
    //     this.NumeroLimite = this.NumeroLimite+10 
    //      });

  }


ObtenerUsuario(email:string){
  // this.UsuariosService.ObtenerUsuario(email).subscribe(usuario=>{

  // })
}


}