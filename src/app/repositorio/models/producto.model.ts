export class Producto {
    Cantidad: number;
    Categoria: number;
    Departamento:number;
    Descripcion:string;
    Oferta:boolean;
    PrecioOferta:number;
    imagen:string;
    isSpecialOffer:boolean;
    itemtype:number;
    nombre:string;
    nombreLowerCase:string;
    precio:number;
    productoNacional:boolean;
    productoTemporada:string[];
    sku:string;
    constructor(value: Producto){
        this.Cantidad = value.Cantidad;
        this.Categoria = value.Categoria;
        this.Departamento = value.Departamento;
        this.Descripcion = value.Descripcion;
        this.PrecioOferta = value.PrecioOferta;
        this.Oferta = value.Oferta;
        this.imagen = value.imagen;
        this.isSpecialOffer = value.isSpecialOffer;
        this.itemtype = value.itemtype;
        this.nombre = value.nombre;
        this.nombreLowerCase = value.nombreLowerCase;
        this.precio = value.precio;
        this.productoNacional = value.productoNacional;
        this.productoTemporada = value.productoTemporada;
        this.sku = value.sku;
    }
}