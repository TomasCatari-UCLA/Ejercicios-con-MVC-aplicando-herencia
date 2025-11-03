import Cl_mComerciante from "./Cl_mComerciante.js";
import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mProcesador {
    private cntCredAprobados: number = 0;
    private cntCredRechazados: number = 0

    constructor(){
        this.cntCredAprobados = 0;
        this.cntCredRechazados = 0;
    }
    procesarSolicitud(comerciante: Cl_mComerciante) {
        if (comerciante.porcAprobado() === 100) {
            this.cntCredAprobados++;
        }
        if (comerciante.porcAprobado() === 0) {
            this.cntCredRechazados++;
        }
    }
    CreditosAprobados(): number {
        return this.cntCredAprobados;
    }
    CreditosRechazados(): number {
        return this.cntCredRechazados;
    }
}