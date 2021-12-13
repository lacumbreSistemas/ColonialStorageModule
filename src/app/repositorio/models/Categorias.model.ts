export class Categorias {
    Id:string
    Nombre:string
    img:string

    constructor(categoria: Categorias){
        this.Id = categoria.Id;
        this.Nombre = categoria.Nombre;
        this.img = categoria.img; 
    }


}
