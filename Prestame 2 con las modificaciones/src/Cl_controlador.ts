import Cl_mBanco from "./Cl_mBanco.js";
import Cl_mPrestamo from "./Cl_mPrestamo.js";
import Cl_mVehiculo from "./Cl_mVehiculo.js";
import Cl_mVivienda from "./Cl_mVivienda.js";
import Cl_vBanco from "./Cl_vBanco.js";
import { iVehiculo } from "./Cl_vVehiculo.js";
import { iVivienda } from "./Cl_vVivienda.js";

export default class Cl_controlador {
  public modelo: Cl_mBanco;
  public vista: Cl_vBanco;
  constructor(modelo: Cl_mBanco, vista: Cl_vBanco) {  
    this.modelo = modelo;
    this.vista = vista;
  }
  procesarPrestamoVivienda(data: iVivienda) {
    let mVivienda = new Cl_mVivienda({
      cedula: data.cedula,
      estadoCivil: data.estadoCivil,
      montoPrestamo: data.montoPrestamo,
    });
    this.modelo.procesarPrestamo(mVivienda);
    this.reportarPrestamo({ mPrestamo: mVivienda });
  }
  procesarPrestamoVehiculo(data: iVehiculo) {
    let mVehiculo = new Cl_mVehiculo({
      cedula: data.cedula,
      estadoCivil: data.estadoCivil,
      modelo: data.modelo,
    });
    this.modelo.procesarPrestamo(mVehiculo);
    this.reportarPrestamo({ mPrestamo: mVehiculo });
  }
  reportarPrestamo({ mPrestamo }: { mPrestamo: Cl_mPrestamo }) {
    this.vista.reportarPrestamo({
      dataPrestamo: mPrestamo.toJSON(),
      montoTotalPrestamos: this.modelo.montoTotalPrestamos(),
      montoTotalIntereses: this.modelo.montoTotalIntereses(),
      porcentajeIntereses: this.modelo.porcentajeIntereses(),
      totalInteresNoP: this.modelo.totalInteresNoP(),//aa
    });
    this.vista.show();
  }
}
