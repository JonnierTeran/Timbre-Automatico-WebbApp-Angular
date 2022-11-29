//Creacion del modelo Para el Usuario
export class UserModel{
    //Atributos del usuario
    public id:number;
    public nombre:string;
    public apellido:string;
    public contraseña:string;
    public correo:string;
    
    //Inicializacion de atributos del usuario
    constructor( id:number, nombre:string, apellido:string, contraseña:string, correo:string,){
        this.id =id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.contraseña = contraseña;
        this.correo = correo;
    }
}