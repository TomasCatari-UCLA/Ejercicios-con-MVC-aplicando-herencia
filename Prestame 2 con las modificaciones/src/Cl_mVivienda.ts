import Cl_mPrestamo from "./Cl_mPrestamo.js";

export default class Cl_mVivienda extends Cl_mPrestamo {
  constructor({cedula,estadoCivil,montoPrestamo,}: 
    { cedula: string;estadoCivil: string;montoPrestamo: number;}) {
    super({ cedula, estadoCivil, montoPrestamo });
  }

  montoFinalP(): number {
    if (this.estadoCivil=== "C" || this.estadoCivil=== "c") {
      return (this.montoPrestamo * 0.10) + this.montoPrestamo ;
  }
  else if (this.estadoCivil=== "D"|| this.estadoCivil==="d" ||this.estadoCivil==="S" || this.estadoCivil==="s" ) {
    return (this.montoPrestamo * 0) + this.montoPrestamo;
  }
else return 0
  }
  intereses(){
    return (this.montoFinalP()* 0.10);
  }
  toJSON() {
    return {
      ...super.toJSON(),
    };
  }
}
