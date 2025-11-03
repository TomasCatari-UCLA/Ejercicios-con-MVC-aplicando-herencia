import Cl_mProcesador from "./Cl_mProcesador.js";
import Cl_vCredito from "./Cl_vCredito.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_mComerciante from "./Cl_mComerciante.js";
import { comerciantes } from "./_data.js";

export default class CL_index {
    private controlador: Cl_controlador;

    constructor() {
        let vista = new Cl_vCredito();
        let modelo = new Cl_mProcesador();
        this.controlador = new Cl_controlador(modelo, vista);
        vista.controlador = this.controlador;

        this.iniciarData();
    }
    iniciarData() {
        this.controlador.procesarSolicitud(new Cl_mComerciante(comerciantes[0]));
    }
}