import Cl_mFotografia from './Cl_mFotografia.js';
import Cl_mVideo from './Cl_mVideo.js';
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarFotografia(data) {
        let mFotografia = new Cl_mFotografia({
            codigo: data.codigo,
            costo: data.costo,
            esUrgente: data.esUrgente,
            tipoF: data.tipoF
        });
        this.modelo.procesarPromocion(mFotografia);
        this.reportarPromocion({ mPromocion: mFotografia });
    }
    procesarVideo(data) {
        let mVideo = new Cl_mVideo({
            codigo: data.codigo,
            costo: data.costo,
            esUrgente: data.esUrgente,
            hD: data.hD,
        });
        this.modelo.procesarPromocion(mVideo);
        this.reportarPromocion({ mPromocion: mVideo });
    }
    reportarPromocion({ mPromocion }) {
        this.vista.reportarPromocion({
            dataPromocion: mPromocion.toJSON(),
            totalVendido: this.modelo.totalVendido(),
            cantFotoD: this.modelo.cantFotoD(),
            subTotalFD: this.modelo.subTotalFD(),
            promedioVentasFD: this.modelo.promedioVentasFD(),
            montoFacturaEdicionEspecial: this.modelo.montoFacturaEdicionEspecial(),
        });
        this.vista.show(); // Vuelve a la vista principal después de procesar
    }
}
