export default class Cl_mBanco {
    constructor() {
        this.acMontoPrestamos = 0;
        this.acMontoInteres = 0;
    }
    procesarPrestamo(Prestamo) {
        this.acMontoPrestamos += Prestamo.montoFinalP();
        this.acMontoInteres += Prestamo.intereses();
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
}
