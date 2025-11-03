export default class Cl_mBanco {
    constructor() {
        this.acMontoPrestamos = 0;
        this.acMontoInteres = 0;
        this.acMontoInteresNoPercibido = 0; //aa
    }
    procesarPrestamo(Prestamo) {
        this.acMontoPrestamos += Prestamo.montoFinalP();
        this.acMontoInteres += Prestamo.intereses();
        this.acMontoInteresNoPercibido += Prestamo.interesNoP(); //aa
    }
    montoTotalPrestamos() {
        return this.acMontoPrestamos;
    }
    montoTotalIntereses() {
        return this.acMontoInteres;
    }
    porcentajeIntereses() {
        return this.montoTotalIntereses() / this.montoTotalPrestamos() * 100;
    }
    totalInteresNoP() {
        return this.acMontoInteresNoPercibido; //aa
    }
}
