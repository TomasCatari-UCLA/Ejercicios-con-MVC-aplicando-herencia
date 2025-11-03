export default class Cl_mPersona {
    public _nombre: string = "";
     public _cedula: string = "";
    public _edad: number = 0;
    public _sexo: string = "";
    public _estadoCivil: number = 0;

    constructor({nombre="",cedula="",edad=0,sexo="",estadoCivil=0} :
    {nombre:string;cedula:string; edad:number;sexo:string;estadoCivil:number }) 
    {this.nombre=nombre;this.cedula=cedula;this.edad=edad;this.sexo=sexo;this.estadoCivil=estadoCivil}

    set nombre(nombre: string) {this._nombre = nombre;}
    get nombre(): string {return this._nombre;}

    set cedula(cedula: string) {this._cedula = cedula;}
    get cedula(): string {return this._cedula;}


    set edad(edad: number) {this._edad = edad;}
    get edad(): number {return +this._edad;}

    set sexo(sexo: string) {this._sexo = sexo;}
    get sexo(): string {return this._sexo;}

    set estadoCivil(estadoCivil: number) {this._estadoCivil = estadoCivil;}
    get estadoCivil(): number {return +this._estadoCivil;}

    solicitudBeca(): string {return "";}

    toJSON(){
        return{
      nombre: this.nombre,
      cedula: this.cedula,
      edad: this.edad,
      sexo: this.sexo,
      estadoCivil: this.estadoCivil,
      solicitudBeca: this.solicitudBeca(),
       }
    }
}

