//Modelo Para programar el timbree
export class CalendarModel{
    //Atributos 
   public id?: number;
   public nombre:string;
   public dia:string;
   public hora:string;
   public lunes:string;
   public martes:string;
   public miercoles:string;
   public jueves:string;
   public viernes:string;
   public sabado:string;
   public domingo:string;
   public estado:string

   //Constructos de obj
    constructor(nombre:string, dia:string, hora:string, Lunes:string, Martes:string, 
        Miercoles:string,Jueves:string,Viernes:string,Sabado:string,Domingo:string, Estado:string){
            
            this.nombre=nombre;
            this.dia=dia;
            this.hora=hora;
            this.lunes=Lunes;
            this.martes=Martes;
            this.miercoles=Miercoles;
            this.jueves=Jueves;
            this.viernes= Viernes;
            this.sabado = Sabado;
            this.domingo = Domingo;
            this.estado = Estado;

        }
          
}