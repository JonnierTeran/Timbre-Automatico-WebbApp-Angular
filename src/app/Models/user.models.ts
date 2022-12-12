//Creacion del modelo Para el Usuario
export class UserModel{
    //Atributos del usuario
    public id?:number;
    public nombre:string;
    public apellido:string;
    public contraseña:string;
    public correo:string;
    
    //Inicializacion de atributos del usuario
    constructor(  nombre:string, apellido:string, contraseña:string, correo:string,){
        this.nombre=nombre;
        this.apellido=apellido;
        this.contraseña = contraseña;
        this.correo = correo;
    }
}