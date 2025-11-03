export default class Cl_mProcesador {
    constructor() {
        this.cntCredAprobados = 0;
        this.cntCredRechazados = 0;
        this.cntCredAprobados = 0;
        this.cntCredRechazados = 0;
    }
    procesarSolicitud(comerciante) {
        if (comerciante.porcAprobado() === 100) {
            this.cntCredAprobados++;
        }
        if (comerciante.porcAprobado() === 0) {
            this.cntCredRechazados++;
        }
    }
    CreditosAprobados() {
        return this.cntCredAprobados;
    }
    CreditosRechazados() {
        return this.cntCredRechazados;
    }
}
