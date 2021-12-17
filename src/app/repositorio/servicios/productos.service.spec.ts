import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Articulos2 } from '../models/articulos2.interface';
import { Producto } from '../models/producto.model';
import { AngularFirestoreMock } from '../test-mock/firestore.mock';
import { DepartamentosServices } from './departamentos.service';
import { ProductosService } from './productos.service';

describe('TestService', () => {
  let service: ProductosService;
  let departamentoService: DepartamentosServices;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule
      ],
      providers: [
        ProductosService,
        DepartamentosServices,
        { provide: AngularFirestore, useValue: AngularFirestoreMock }
      ]
    });
    service = TestBed.inject(ProductosService);
    departamentoService = TestBed.inject(DepartamentosServices);
  });

  it('se debe crear el servicio', () => {
    expect(service).toBeTruthy();
  });


  it('Debe regrear la lista de los productos', (done) => {
    service.ObtenerProductos().subscribe(data => {
      expect(data.length).toBeGreaterThan(0);
      expect(data[0]).toBeInstanceOf(Producto);
      done();
    })
  });


  it('Debe obtener todos los productos al inicio', (done) => {
    service.Productos.subscribe(data => {
      expect(data.length).toBeGreaterThan(0);
      expect(data[0]).toBeInstanceOf(Producto);
      done();
    })
  });

  it('Debe retornar solo 1 producto', (done) => {
    service.ObtenerProductosPorSku('101').subscribe(data => {
      
      expect(data.sku).toEqual('101');
    
      done();
    })
  });

  it('Debe retornar todos los productos al no haber una categoria seleccionada', (done) => {
      service.ObtenerProductosPorDepto().subscribe(productos=>{
          expect(productos.length).toEqual(3)
        done()
      }) 

  });

  it('Debe retornar los productos filtrados al haber una categoria seleccionada', (done) => {
    departamentoService.SeleccionarCategoria('2','2');
    service.ObtenerProductosPorDepto().subscribe(productos=>{
      expect(productos.length).toBe(1)
      done()
    })

  });


});