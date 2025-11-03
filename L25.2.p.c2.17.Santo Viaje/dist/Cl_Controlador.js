import Cl_mNacional from "./Cl_mNacional.js";
import Cl_mInternacional from "./Cl_mInternacional.js";
export default class Cl_Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarPaqueteInternacional(data) {
        let mInternacional = new Cl_mInternacional({
            Codigo: data.Codigo,
            Costo: data.Costo,
        });
        this.modelo.procesarPaquete(mInternacional);
        this.reportarPaquete({ mPaquete: mInternacional });
    }
    procesarPaqueteNacional(data) {
        let mNacional = new Cl_mNacional({
            Codigo: data.Codigo,
            Costo: data.Costo,
            Destino: data.Destino,
        });
        this.modelo.procesarPaquete(mNacional);
        this.reportarPaquete({ mPaquete: mNacional });
    }
    reportarPaquete({ mPaquete }) {
        this.vista.reportarPaquete({
            dataPaquete: mPaquete.toJSON(),
            TotalVentas: this.modelo.TotalVentas(),
            Porcentaje: this.modelo.Porcentaje(),
            paquetesInternacioles: this.modelo.paquetesInternacioles(),
        });
        this.vista.show();
    }
}
