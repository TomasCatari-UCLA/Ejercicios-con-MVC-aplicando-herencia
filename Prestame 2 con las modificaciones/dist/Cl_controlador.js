import Cl_mVehiculo from "./Cl_mVehiculo.js";
import Cl_mVivienda from "./Cl_mVivienda.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarPrestamoVivienda(data) {
        let mVivienda = new Cl_mVivienda({
            cedula: data.cedula,
            estadoCivil: data.estadoCivil,
            montoPrestamo: data.montoPrestamo,
        });
        this.modelo.procesarPrestamo(mVivienda);
        this.reportarPrestamo({ mPrestamo: mVivienda });
    }
    procesarPrestamoVehiculo(data) {
        let mVehiculo = new Cl_mVehiculo({
            cedula: data.cedula,
            estadoCivil: data.estadoCivil,
            modelo: data.modelo,
        });
        this.modelo.procesarPrestamo(mVehiculo);
        this.reportarPrestamo({ mPrestamo: mVehiculo });
    }
    reportarPrestamo({ mPrestamo }) {
        this.vista.reportarPrestamo({
            dataPrestamo: mPrestamo.toJSON(),
            montoTotalPrestamos: this.modelo.montoTotalPrestamos(),
            montoTotalIntereses: this.modelo.montoTotalIntereses(),
            porcentajeIntereses: this.modelo.porcentajeIntereses(),
            totalInteresNoP: this.modelo.totalInteresNoP(), //aa
        });
        this.vista.show();
    }
}
