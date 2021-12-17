import { TestBed } from "@angular/core/testing";
import { AngularFirestore, AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFirestoreMock } from "../test-mock/firestore.mock";
import { DepartamentosServices } from "./departamentos.service";

describe('TestDepartamentoServicio', () => {
    let departamentoService: DepartamentosServices;


    beforeEach(() => {

        TestBed.configureTestingModule({
          imports: [
            AngularFirestoreModule
          ],
          providers: [
         
            DepartamentosServices,
            { provide: AngularFirestore, useValue: AngularFirestoreMock }
          ]
        });
        departamentoService = TestBed.inject(DepartamentosServices);
      });


      it('se debe crear el servicio de Departamento', () => {
        expect(departamentoService).toBeTruthy();
      });
    
      it('se debe traer los departamentos', () => {
        departamentoService.ObtenerCategoria().subscribe(Departamento=>{
          expect(Departamento.length).toBeGreaterThan(0)
        })
      });
    
      it('se debe traer una categoria seleccionada', () => {
        departamentoService.SeleccionarCategoria('2','1');
        departamentoService.categoriasSeleccionada.subscribe(categoria=>{
          expect(categoria?.categoriaNombre).toEqual('Cervezas')
          expect(categoria?.departamentoNombre).toEqual('Bebidas Alcoholicas')
        })
      });
    


})