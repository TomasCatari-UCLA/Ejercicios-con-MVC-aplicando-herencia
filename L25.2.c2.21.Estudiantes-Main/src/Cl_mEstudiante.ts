import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mEstudiante extends Cl_mPersona {
    public _nota: number = 0;

    constructor({nota=0,nombre="",cedula="", edad=0,sexo="",estadoCivil=0}:
    {nota:number;nombre:string;cedula:string; edad:number;sexo:string;estadoCivil:number}) {
    super({nombre,cedula,edad,sexo,estadoCivil});
    this.nota=nota;
    }
    set nota(nota: number) {
        this._nota = nota;
    }
    get nota(): number {
        return +this._nota;
    }
    solicitudBeca(): string { 
    if (this.nota>17 && this.edad<20 && this.estadoCivil===1) {
    return "Si" ; }
    if (this.nota>17 && this.edad<20 && this.estadoCivil===2) {
    return "Si" ; }
    if (this.nota>17 && this.edad<20 && this.estadoCivil===3) {
    return "Si" ; }
    if (this.nota>17 && this.edad<20 && this.estadoCivil===4) {
    return "Si" ; }
     if (this.nota>15 && this.edad>=20 && this.estadoCivil===2) {
    return "Si" ; }
    else return  "No"
    }
    toJSON() {
    return {
      ...super.toJSON(),
      nota: this.nota,
    };
    }
}