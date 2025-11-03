import Cl_mPrestamo from "./Cl_mPrestamo.js";

export default class Cl_mBanco {
  private acMontoPrestamos: number = 0;
  private acMontoInteres: number = 0;
  private acMontoInteresNoPercibido: number = 0; //aa

  procesarPrestamo(Prestamo: Cl_mPrestamo) {
    this.acMontoPrestamos+=Prestamo.montoFinalP();
    this.acMontoInteres+=Prestamo.intereses();
    this.acMontoInteresNoPercibido+=Prestamo.interesNoP(); //aa

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

  totalInteresNoP(): number{
    return this.acMontoInteresNoPercibido //aa
  }
}
