import Cl_mDirectivos from "./Cl_mDirectivos.js";
import Cl_mOperadores from "./Cl_mOperadores.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarEmpleadoOperadores(data) {
        let mOperadores = new Cl_mOperadores({
            id: data.id,
            nombre: data.nombre,
            sueldoBase: data.sueldoBase,
            horaExtra: data.horaExtra,
        });
        this.modelo.procesarEmpleado(mOperadores);
        this.reportarEmpleado({ mEmpleado: mOperadores });
    }
    procesarEmpleadoDirectivos(data) {
        let mDirectivos = new Cl_mDirectivos({
            id: data.id,
            nombre: data.nombre,
            sueldoBase: data.sueldoBase,
            nocturno: data.nocturno,
        });
        this.modelo.procesarEmpleado(mDirectivos);
        this.reportarEmpleado({ mEmpleado: mDirectivos });
    }
    reportarEmpleado({ mEmpleado }) {
        this.vista.reportarEmpleado({
            dataEmpleado: mEmpleado.toJSON(),
            prima: mEmpleado.prima(),
            adicional: mEmpleado.adicional(),
            sueldoMensual: mEmpleado.sueldoMensual(),
            montoTotalPagado: this.modelo.montoTotalPagado(),
            montoAdicionalOperadores: this.modelo.montoAdicionalOperadores(),
            montoAdicionalDirectivo: this.modelo.montoAdicionalDirectivo(),
        });
        this.vista.show();
    }
}
