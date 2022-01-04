import { fakeAsync, TestBed } from "@angular/core/testing";
import { AngularFirestore, AngularFirestoreModule, QueryFn } from "@angular/fire/compat/firestore";
import { environment } from "src/environments/environment";
import { AngularFirestoreMock } from "../test-mock/firestore.mock";
import { PedidosService } from "./pedidos.service"

describe('TestServicePedidos', () => {

  let servicioPedido: PedidosService
  let firestoreCollectionMockSpy: jasmine.Spy;
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
    firestoreCollectionMockSpy = spyOn(AngularFirestoreMock, "collection").and.callThrough();

  });


  it('se debe crear el servicio de Pedidos', () => {
    expect(servicioPedido).toBeTruthy();
  });

  it('Debe ser llamada con el query correcto para firebase', (done) => {
    let estado = [0];
    let email = "sfdfsdf";
    let limite = 10;

    servicioPedido.obtenerPedidosPendientes(email, limite, estado).subscribe(() => {
      let funcionLlamada = removeStringSpacesAndLineBreaks(firestoreCollectionMockSpy.calls.mostRecent().args[1].toString());
      let funcionEsperada = removeStringSpacesAndLineBreaks(`ref => ref.
      where('PagoConfirmado', '==', true).where('Estado', 'in', estado).
      where('Usuario.email', '==', email)
      .limit(limite)
      .orderBy('Numero', 'asc')`);
      expect(
        funcionLlamada === funcionEsperada
      ).toBeTrue();
      done();
    });

  });


  it('La funcion obtenerPedidosPendientes debe tener los parametros email, limite, estado', (done) => {
    let estado = [0];
    let email = "sfdfsdf";
    let limite = 10;
  
    servicioPedido.obtenerPedidosPendientes(email,limite, estado)

  });




})

function removeStringSpacesAndLineBreaks(value: string) {
  return value.replace(/\s/g, '').replace(/\n/g, '');
}

