import Cl_mEmpleado from "./Cl_mEmpleado.js";

export default class Cl_mEmpresa {
  private acMontoTotal: number = 0;
  private acPrima: number = 0;
  private acAdicional: number = 0;

  procesarEmpleado(Empleado: Cl_mEmpleado) {
    this.acMontoTotal += Empleado.sueldoMensual();
    this.acPrima += Empleado.prima();
    this.acAdicional += Empleado.adicional();
  }
  montoTotalPagado(): number {
    return this.acMontoTotal;
  }
  montoAdicionalOperadores(): number {
    return this.acPrima;
  }
  montoAdicionalDirectivo(): number {
    return this.acAdicional;
  }
  
}
