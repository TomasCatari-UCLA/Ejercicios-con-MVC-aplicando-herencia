import Cl_mDirectivos from "./Cl_mDirectivos.js";
import Cl_mEmpleado from "./Cl_mEmpleado.js";
import Cl_mOperadores from "./Cl_mOperadores.js";

export default class Cl_mEmpresa {
  private acMontoTotal: number = 0;
  private acPrima: number = 0;
  private acAdicional: number = 0;
  private mayorHoras:number= -Infinity;
  private AuxNombreOperador: string= "";
  private cntDirectivos: number = 0;
  private acBonos: number = 0;

  procesarEmpleado(Empleado: Cl_mEmpleado) {
    this.acMontoTotal += Empleado.sueldoMensual();
    this.acPrima += Empleado.prima();
    this.acAdicional += Empleado.adicional();

    // req 1
    this.acBonos+=Empleado.bonoAntiguedad();

    // req 2
    if(Empleado instanceof Cl_mOperadores){
      if(Empleado.horaExtra> this.mayorHoras){
        this.mayorHoras = Empleado.horaExtra,
        this.AuxNombreOperador = Empleado.nombre
      }
    }

    // req 3
   if(Empleado instanceof Cl_mDirectivos){
      this.cntDirectivos++
  }

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
  
  ReporteMayor(): string {
    return this.AuxNombreOperador
  }

  ConfirmacionDirectivos(): boolean{
    if (this.cntDirectivos > 10){
      return true
    }
    else return false
  }

  ReporteBonos():number{
    return this.acBonos
  }
}

