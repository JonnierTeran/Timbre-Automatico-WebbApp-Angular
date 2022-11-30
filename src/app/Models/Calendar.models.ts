//Modelo Para programar el timbree
export class CalendarModel{
    //Atributos 
   public nombre:string;
   public dia:string;
   public  hora:string;
   public Lunes:string;
   public Martes:string;
   public Miercoles:string;
   public Jueves:string;
   public Viernes:string;
   public Sabado:string;
   public Domingo:string;
   public Estado:string

   //Constructos de obj
    constructor(nombre:string, dia:string, hora:string, Lunes:string, Martes:string, 
        Miercoles:string,Jueves:string,Viernes:string,Sabado:string,Domingo:string, Estado:string){

            this.nombre=nombre;
            this.dia=dia;
            this.hora=hora;
            this.Lunes=Lunes;
            this.Martes=Martes;
            this.Miercoles=Miercoles;
            this.Jueves=Jueves;
            this.Viernes= Viernes;
            this.Sabado = Sabado;
            this.Domingo = Domingo;
            this.Estado = Estado;
        }
          
}