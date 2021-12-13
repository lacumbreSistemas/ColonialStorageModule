import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categorias } from '../models/categorias.model';


import { CategoriaSeleccionada } from '../models/categoriaSeleccionada.interface';
import { Departamentos } from '../models/Departamentos.model';



@Injectable()
export class DepartamentosServices {
  public Departamentos = new BehaviorSubject<Departamentos[]>([]);
  public categoriasSeleccionada = new BehaviorSubject<CategoriaSeleccionada | null>(null);
  categorias: any = []

  constructor(private firestore: AngularFirestore) {
    this.ObtenerCategoria().subscribe(departamento => {
      this.Departamentos.next(departamento)
    });
  }


  ObtenerCategoria() {
    return this.firestore.collection<Departamentos>('Departamentos').valueChanges().pipe(
      map((departamentos) => {
        let departamentosListo: Departamentos[] = [];
        departamentos.forEach(item => {
          departamentosListo.push(new Departamentos(item));
        })
        return departamentosListo;
      })
    )
  }


  SeleccionarCategoria(idDepartamento: string, idCategoria: string)  {
    let departamento = this.Departamentos.getValue();
    let DepartamentoFiltrado = departamento.filter((dep: Departamentos) => dep.Id === idDepartamento)
    let CategoriaFiltrada = DepartamentoFiltrado[0]?.Categorias.filter((categ: Categorias) => categ.Id === idCategoria)

    if (DepartamentoFiltrado.length > 0 && CategoriaFiltrada.length > 0) {
      let CategSelect: CategoriaSeleccionada = {
        departamentoID: DepartamentoFiltrado[0]?.Id,
        departamentoNombre: DepartamentoFiltrado[0]?.Nombre,
        categoriaId: CategoriaFiltrada[0]?.Id,
        categoriaNombre: CategoriaFiltrada[0]?.Nombre
      }
      this.categoriasSeleccionada.next(CategSelect)
     
    }
    return false
  }

}
