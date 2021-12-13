import { Categorias } from "./categorias.model"

export class Departamentos {

    Id: string
    Instrucciones: string
    Nombre: string
    OrderId: number
    img: string
    Categorias: Categorias[]

    constructor(departamento: Departamentos) {
        this.Id = departamento.Id;
        this.Instrucciones = departamento.Instrucciones;
        this.Nombre = departamento.Nombre;
        this.OrderId = departamento.OrderId;
        this.img = departamento.img;
        this.Categorias = [];
        departamento.Categorias?.forEach(categoria => {
            this.Categorias.push(new Categorias(categoria));
        })


    }



}
