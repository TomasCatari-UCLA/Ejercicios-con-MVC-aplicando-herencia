import Cl_mInternacional from "./Cl_mInternacional.js";
export default class Cl_mAgencia {
    constructor() {
        this.acTotalVendido = 0;
        this.cntViajeInternacional = 0;
        this.cntPaquetesInternacional = 0;
        this.cntGeneral = 0;
    }
    procesarPaquete(Paquete) {
        this.acTotalVendido += Paquete.Total();
        this.cntGeneral++;
        if (Paquete instanceof Cl_mInternacional) {
            this.cntPaquetesInternacional++;
        }
    }
    paquetesInternacioles() {
        return this.cntPaquetesInternacional;
    }
    TotalVentas() {
        return this.acTotalVendido;
    }
    Porcentaje() {
        return (this.cntPaquetesInternacional / this.cntGeneral) * 100;
    }
}
