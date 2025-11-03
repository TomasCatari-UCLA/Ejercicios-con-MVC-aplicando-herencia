import Cl_mInternacional from "./Cl_mInternacional.js";
import Cl_mPaquete from "./Cl_mPaquete.js";

export default class Cl_mAgencia {
  private acTotalVendido: number = 0;
  private cntViajeInternacional: number = 0;
   private cntPaquetesInternacional: number = 0;
  private cntGeneral: number = 0;

  procesarPaquete(Paquete: Cl_mPaquete) {
    this.acTotalVendido+=Paquete.Total();
    this.cntGeneral++

    if (Paquete instanceof Cl_mInternacional) {
         this.cntPaquetesInternacional++;
}
}
 paquetesInternacioles(): number {
    return this.cntPaquetesInternacional;
  }
  TotalVentas(): number {
    return this.acTotalVendido;
  }
  Porcentaje(): number {
    return  (this.cntPaquetesInternacional/this.cntGeneral)*100
  }

}

