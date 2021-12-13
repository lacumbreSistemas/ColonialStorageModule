export class Usuarios {

    Direccion:string;
    NoCedula:string;
    NoCelular:string;
    SupermercadoPrefencial:string;
    displayName:string;
    email:string;
    emailVerified:boolean;
    photoURL:null;
    CarnetPuntos?:null;
    uid:string
    

    constructor(Usuarios: Usuarios){
        this.Direccion = Usuarios.Direccion;
        this.NoCedula = Usuarios.NoCedula;
        this.NoCelular = Usuarios.NoCelular;
        this.SupermercadoPrefencial = Usuarios.SupermercadoPrefencial;
        this.displayName = Usuarios.displayName;
        this.email = Usuarios.email;
        this.emailVerified = Usuarios.emailVerified;
        this.photoURL = Usuarios.photoURL;
        this.uid = Usuarios.uid;
        this.CarnetPuntos = Usuarios.CarnetPuntos||null;
       
       
      
    }
}