import { fakeAsync, TestBed } from "@angular/core/testing";
import { AngularFirestore, AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { environment } from "src/environments/environment";
import { AngularFirestoreMock } from "../test-mock/firestore.mock";
import { PedidosService } from "./pedidos.service"

describe('TestServicePedidos', () => {

let servicioPedido: PedidosService

beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        AngularFirestoreModule
      ],
      providers: [
        PedidosService,
        { provide: AngularFirestore, useValue: AngularFirestoreMock }
      ]
    });
    servicioPedido = TestBed.inject(PedidosService);

  });


  it('se debe crear el servicio de Pedidos', () => {
    expect(servicioPedido).toBeTruthy();
  });

  it('debe obtener N cantidad de registro segun parametros', (done) => {
    servicioPedido.obtenerPedidosPendientes('motiluar@gmail.com',2,[3]).subscribe(pedidos=>{
        console.info('pedidos', pedidos.length)
        expect(pedidos.length).toEqual(4);
     done();
    });
  

  });


})