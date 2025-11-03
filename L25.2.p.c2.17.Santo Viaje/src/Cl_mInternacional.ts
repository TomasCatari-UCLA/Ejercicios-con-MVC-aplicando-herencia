import Cl_mPaquete from "./Cl_mPaquete.js";

export default class Cl_mInternacional extends Cl_mPaquete {
  constructor({Codigo,Costo,}: 
    { Codigo: number;Costo: number;}) {
    super({ Codigo, Costo,});
  }

  Descuento(): number {
    return (this.Costo * 0.15)
  }

  Total(): number{
    return this.Costo - this.Descuento()
  }

Internacional(): boolean { 
  return true 
}

  toJSON() {
    return {
      ...super.toJSON(),
      internacionales: this.Internacional()
    };
  }
}
