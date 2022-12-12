//Modelo Para programar el timbree
export class CalendarModel {
  //Atributos
  //Atributo opcional
  public id?: number;

  //Atributos Obligatorios
  public nombre: string;
  public dia: string;
  public hora: string;
  public lunes?: string;
  public martes?: string;
  public miercoles?: string;
  public jueves?: string;
  public viernes?: string;
  public sabado?: string;
  public domingo?: string;
  public estado: string;

  //Constructos de obj
  constructor(nombre: string, dia: string, hora: string, Estado: string) {
    this.nombre = nombre;
    this.dia = dia;
    this.hora = hora;
    // this.lunes=Lunes;
    // this.martes=Martes;
    // this.miercoles=Miercoles;
    // this.jueves=Jueves;
    //this.viernes= Viernes;
    //this.sabado = Sabado;
    //this.domingo = Domingo;
    this.estado = Estado;
  }
}
