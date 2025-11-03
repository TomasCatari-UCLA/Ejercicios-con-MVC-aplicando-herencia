import Cl_mPrestamo from "./Cl_mPrestamo.js";

export default class Cl_mBanco {
  private acMontoPrestamos: number = 0;
  private acMontoInteres: number = 0;
  constructor() {
    this.acMontoPrestamos = 0;
    this.acMontoInteres = 0;
  }
  procesarPrestamo(Prestamo: Cl_mPrestamo) {
    this.acMontoPrestamos+=Prestamo.montoFinalP();
    this.acMontoInteres+=Prestamo.intereses();
  }
  montoTotalPrestamos(): number {
    return this.acMontoPrestamos;
  }
  montoTotalIntereses(): number {
    return this.acMontoInteres;
  }
  porcentajeIntereses(): number { 
  return this.montoTotalIntereses()/this.montoTotalPrestamos()* 100 ;
}
}
