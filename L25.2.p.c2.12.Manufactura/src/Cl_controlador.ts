import Cl_mEmpresa from "./Cl_mEmpresa.js";
import Cl_mEmpleado from "./Cl_mEmpleado.js";
import Cl_mDirectivos from "./Cl_mDirectivos.js";
import Cl_mOperadores from "./Cl_mOperadores.js";
import Cl_vEmpresa from "./Cl_vEmpresa.js";
import { iDirectivos } from "./Cl_vDirectivos.js";
import { iOperadores } from "./Cl_vOperadores.js";

export default class Cl_controlador {
  public modelo: Cl_mEmpresa;
  public vista: Cl_vEmpresa;
  constructor(modelo: Cl_mEmpresa, vista: Cl_vEmpresa) {
    this.modelo = modelo;
    this.vista = vista;
  }
  procesarEmpleadoOperadores(data: iOperadores) {
    let mOperadores = new Cl_mOperadores({
      id: data.id,
      nombre: data.nombre,
      sueldoBase: data.sueldoBase,
      horaExtra: data.horaExtra,
    });
    this.modelo.procesarEmpleado(mOperadores);
    this.reportarEmpleado({ mEmpleado: mOperadores });
  }
  procesarEmpleadoDirectivos(data: iDirectivos) {
    let mDirectivos = new Cl_mDirectivos({
      id: data.id,
      nombre: data.nombre,
      sueldoBase: data.sueldoBase,
      nocturno: data.nocturno,
    });
    this.modelo.procesarEmpleado(mDirectivos);
    this.reportarEmpleado({ mEmpleado: mDirectivos });
  }
  reportarEmpleado({ mEmpleado }: { mEmpleado: Cl_mEmpleado }) {
    this.vista.reportarEmpleado({
      dataEmpleado: mEmpleado.toJSON(),
      prima: mEmpleado.prima(),
      adicional: mEmpleado.adicional(),
      sueldoMensual:mEmpleado.sueldoMensual(),
      montoTotalPagado: this.modelo.montoTotalPagado(),
      montoAdicionalOperadores: this.modelo.montoAdicionalOperadores(),
      montoAdicionalDirectivo: this.modelo.montoAdicionalDirectivo(),
    });
    this.vista.show();
  }
}
