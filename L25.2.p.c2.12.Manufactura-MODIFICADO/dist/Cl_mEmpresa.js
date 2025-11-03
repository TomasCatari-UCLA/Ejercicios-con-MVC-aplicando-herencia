import Cl_mDirectivos from "./Cl_mDirectivos.js";
import Cl_mOperadores from "./Cl_mOperadores.js";
export default class Cl_mEmpresa {
    constructor() {
        this.acMontoTotal = 0;
        this.acPrima = 0;
        this.acAdicional = 0;
        this.mayorHoras = -Infinity;
        this.AuxNombreOperador = "";
        this.cntDirectivos = 0;
        this.acBonos = 0;
    }
    procesarEmpleado(Empleado) {
        this.acMontoTotal += Empleado.sueldoMensual();
        this.acPrima += Empleado.prima();
        this.acAdicional += Empleado.adicional();
        // req 1
        this.acBonos += Empleado.bonoAntiguedad();
        // req 2
        if (Empleado instanceof Cl_mOperadores) {
            if (Empleado.horaExtra > this.mayorHoras) {
                this.mayorHoras = Empleado.horaExtra,
                    this.AuxNombreOperador = Empleado.nombre;
            }
        }
        // req 3
        if (Empleado instanceof Cl_mDirectivos) {
            this.cntDirectivos++;
        }
    }
    montoTotalPagado() {
        return this.acMontoTotal;
    }
    montoAdicionalOperadores() {
        return this.acPrima;
    }
    montoAdicionalDirectivo() {
        return this.acAdicional;
    }
    ReporteMayor() {
        return this.AuxNombreOperador;
    }
    ConfirmacionDirectivos() {
        if (this.cntDirectivos > 10) {
            return true;
        }
        else
            return false;
    }
    ReporteBonos() {
        return this.acBonos;
    }
}
