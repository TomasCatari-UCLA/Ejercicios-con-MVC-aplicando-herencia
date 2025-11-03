// **= req terminado


// PARA LA CLASE EMPLEADO :
// Para incentivar a losempleados se les dara un bono de antiguedad
// este bono vale 10 dolares que valdra segun los años de antiguedad
// y este bono se duplicara si las horas extra por partes de los operadores
// superan las 30 horas extra y por el Directivo si es nocturno



// **PARA CLASE HIJA CL_MOPERADORES
// EXPONER AL OPERADOR QUE MAS EXPLOTARON LABORALMENTE(Al que más trabajo pues)


// **PARA LA CLASE MAYOR EN BASE A DIRECTIVOS:
// CONFIRMAR SI EN LA EMPRESA HAY MÁS DE 10 DIRECTIVOS 
export default class Cl_mEmpleado {
  public _id: number = 0;
  public _nombre: string = "";
  public _sueldoBase: number = 0;
  public _antiguedad:number=0
  constructor({
    id,
    nombre,
    sueldoBase,
    antiguedad
  }: {
    id: number;
    nombre: string;
    sueldoBase: number;
    antiguedad:number;
  }) {
    this.id = id;
    this.nombre = nombre;
    this.sueldoBase = sueldoBase;
    this.antiguedad=antiguedad;
  }
  set id(id: number) {
    this._id = +id;
  }
  get id(): number {
    return this._id;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  get nombre(): string {
    return this._nombre;
  }
  set sueldoBase(sueldoBase: number) {
    this._sueldoBase = +sueldoBase;
  }
  get sueldoBase(): number {
    return this._sueldoBase;
  }
   set antiguedad(antiguedad: number) {
    this._antiguedad = +antiguedad;
  }
  get antiguedad(): number {
    return this._antiguedad;
  }
    
  sueldoMensual(): number {
    return 0;
  }
  prima(): number {
    return 0;
  }
  adicional(): number {
    return 0;
  }
  bonoAntiguedad(): number {
    return 0;
  }


  toJSON() {
    return {
      id: this.id,
      nombre: this.nombre,
      sueldoBase: this.sueldoBase,
      antiguedad:this.antiguedad,
      sueldoMensual: this.sueldoMensual(),
      prima: this.prima(),
      adicional: this.adicional(),
      bonoAntiguedad:this.bonoAntiguedad()
    };
  }
}
