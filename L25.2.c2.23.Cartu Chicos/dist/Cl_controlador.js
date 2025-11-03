import Cl_mLaser from "./Cl_mLaser.js";
import Cl_mTinta from "./Cl_mTinta.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarTinta(data) {
        let mTinta = new Cl_mTinta({
            id: data.id,
            tipoTinta: data.tipoTinta,
        });
        this.modelo.procesarImpresora(mTinta);
        this.reportarImpresora({ mImpresora: mTinta });
    }
    procesarLaser(data) {
        let mLaser = new Cl_mLaser({
            id: data.id,
            cantToner: data.cantToner,
        });
        this.modelo.procesarImpresora(mLaser);
        this.reportarImpresora({ mImpresora: mLaser });
    }
    reportarImpresora({ mImpresora }) {
        this.vista.reportarImpresora({
            dataImpresora: mImpresora.toJSON(),
            cantidadLaser: this.modelo.cantidadLaser(),
            cantImpresoras: this.modelo.cantImpresoras(),
            porcentajeImpresoraLaser: this.modelo.porcentajeImpresoraLaser(),
        });
        this.vista.show(); // Vuelve a la vista principal después de procesar
    }
}
