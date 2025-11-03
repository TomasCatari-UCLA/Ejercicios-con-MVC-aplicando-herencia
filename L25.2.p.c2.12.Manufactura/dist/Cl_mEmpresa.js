export default class Cl_mEmpresa {
    constructor() {
        this.acMontoTotal = 0;
        this.acPrima = 0;
        this.acAdicional = 0;
    }
    procesarEmpleado(Empleado) {
        this.acMontoTotal += Empleado.sueldoMensual();
        this.acPrima += Empleado.prima();
        this.acAdicional += Empleado.adicional();
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
}
