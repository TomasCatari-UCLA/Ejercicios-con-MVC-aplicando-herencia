import Cl_mComerciante from "./Cl_mComerciante.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarSolicitud(data) {
        let mComerciante = new Cl_mComerciante({
            cedula: data.cedula,
            nombre: data.nombre,
            edad: data.edad,
            sexo: data.sexo,
            edoCivil: data.edoCivil,
        });
        this.modelo.procesarSolicitud(mComerciante);
        this.reportarSolicitud({ mPersona: mComerciante });
    }
    reportarSolicitud({ mPersona }) {
        this.vista.reportarSolicitud({
            dataPersona: mPersona.toJSON(),
            creditosAprobados: this.modelo.CreditosAprobados(),
            creditosRechazados: this.modelo.CreditosRechazados(),
        });
        this.vista.show();
    }
}
