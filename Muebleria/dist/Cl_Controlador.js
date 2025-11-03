import Cl_mComedor from "./Cl_mComedor.js";
import Cl_mMueble from "./Cl_mMueble.js";
export default class Cl_Controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarMobilarioMueble(data) {
        let mMueble = new Cl_mMueble({
            madera: data.madera,
            factura: data.factura,
            tela: data.tela,
        });
        this.modelo.procesarMobilario(mMueble);
        this.reportarMobilario({ mMobilario: mMueble });
    }
    procesarMobilarioComedor(data) {
        let mComedor = new Cl_mComedor({
            madera: data.madera,
            factura: data.factura,
            sillas: data.sillas
        });
        this.modelo.procesarMobilario(mComedor);
        this.reportarMobilario({ mMobilario: mComedor });
    }
    reportarMobilario({ mMobilario }) {
        this.vista.reportarMobilario({
            dataMobilario: mMobilario.toJSON(),
            precioM3: mMobilario.precioM3(),
            m3: mMobilario.m3(),
            incremento: mMobilario.incremento(),
            precio: mMobilario.precio(),
            porcentajeComedor: this.modelo.porcentajeComedor(),
            totalVendido: this.modelo.totalVendido(),
            mayorVendido: this.modelo.mayorVendido(),
        });
        this.vista.show();
    }
}
// a probar si funciona
