export class Pedidos {
    AceptaSustitutos: boolean;
    Envio: number;
    Estado: number;
    FechaCerrado: Date;
    FechaCreado: Date;
    IdFactura: number;
    Items:string[];
    Numero: number;
    ProductosAdicionales: string;
    Usuario:any[];
    uid: string;

    constructor(pedido: Pedidos){
        this.AceptaSustitutos = pedido.AceptaSustitutos;       
        this.Envio = pedido.Envio;
        this.Estado = pedido.Estado;
        this.FechaCerrado = pedido.FechaCerrado;
        this.FechaCreado = pedido.FechaCreado;
        this.IdFactura = pedido.IdFactura;
        this.Items = pedido.Items;
        this.Numero = pedido.Numero;
        this.ProductosAdicionales = pedido.ProductosAdicionales;
        this.Usuario = pedido.Usuario;
        this.uid = pedido.uid;
       
       
      
    }
}
