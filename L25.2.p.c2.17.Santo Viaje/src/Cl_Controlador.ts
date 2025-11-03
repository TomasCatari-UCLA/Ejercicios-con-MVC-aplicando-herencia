import Cl_mAgencia from "./Cl_mAgencia.js";
import Cl_mPaquete from "./Cl_mPaquete.js";
import Cl_mNacional from "./Cl_mNacional.js";
import Cl_mInternacional  from "./Cl_mInternacional.js";
import Cl_vAgencia from "./Cl_vAgencia.js";
import { iNacional } from "./Cl_vNacional.js";
import { iInternacional } from "./Cl_vInternacional.js";

export default class Cl_Controlador {
  public modelo: Cl_mAgencia;
  public vista: Cl_vAgencia;
  constructor(modelo: Cl_mAgencia, vista: Cl_vAgencia) {  
    this.modelo = modelo;
    this.vista = vista;
  }
  procesarPaqueteInternacional (data: iInternacional ) {
    let mInternacional  = new Cl_mInternacional ({
      Codigo : data.Codigo ,
      Costo : data.Costo ,
    });
    this.modelo.procesarPaquete(mInternacional );
    this.reportarPaquete({ mPaquete: mInternacional  });
  }
  procesarPaqueteNacional(data: iNacional) {
    let mNacional = new Cl_mNacional({
      Codigo : data.Codigo ,
      Costo : data.Costo ,
      Destino: data.Destino,
    });
    this.modelo.procesarPaquete(mNacional);
    this.reportarPaquete({ mPaquete: mNacional });
  }
  reportarPaquete({ mPaquete }: { mPaquete: Cl_mPaquete}) {
    this.vista.reportarPaquete({
      dataPaquete: mPaquete.toJSON(),
      TotalVentas: this.modelo.TotalVentas(),
      Porcentaje: this.modelo.Porcentaje(),
      paquetesInternacioles:this.modelo.paquetesInternacioles(),
    });
    this.vista.show();
  }
}
