import Cl_mComerciante from "./Cl_mComerciante.js";
import Cl_mPersona from "./Cl_mPersona.js";
import Cl_mProcesador from "./Cl_mProcesador.js";
import Cl_vCredito from "./Cl_vCredito.js";
import { iComerciante } from "./Cl_vComerciante.js";

export default class Cl_controlador {
    public modelo: Cl_mProcesador;
    public vista: Cl_vCredito;

    constructor(modelo: Cl_mProcesador, vista: Cl_vCredito) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarSolicitud(data: iComerciante) {
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
    reportarSolicitud({ mPersona }: { mPersona: Cl_mPersona }) {
        this.vista.reportarSolicitud({
            dataPersona: mPersona.toJSON(),
            creditosAprobados: this.modelo.CreditosAprobados(),
            creditosRechazados: this.modelo.CreditosRechazados(),
        });
        this.vista.show();
    }
}