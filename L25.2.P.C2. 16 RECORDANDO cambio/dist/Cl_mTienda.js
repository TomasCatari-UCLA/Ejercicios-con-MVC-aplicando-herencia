import Cl_mFotografia from './Cl_mFotografia.js';
export default class Cl_mTienda {
    constructor() {
        this.acPrecio = 0.0;
        this.acPrecioFD = 0.0;
        this.cntFotoD = 0;
        this.acEdicionEspecial = 0.0;
        this.acPrecio = 0.0;
        this.acPrecioFD = 0.0;
        this.cntFotoD = 0;
        this.acEdicionEspecial = 0.0;
    }
    procesarPromocion(promocion) {
        if (promocion instanceof Cl_mFotografia) {
            if (promocion.tipoF === "D") {
                this.acPrecioFD += promocion.precioF();
            }
            if (promocion.tipoF === "D") {
                this.cntFotoD++;
            }
        }
        this.acEdicionEspecial += promocion.edicionEspecial();
        this.acPrecio += promocion.precioF();
    }
    totalVendido() {
        return this.acPrecio;
    }
    cantFotoD() {
        return this.cntFotoD;
    }
    subTotalFD() {
        return this.acPrecioFD;
    }
    montoFacturaEdicionEspecial() {
        return this.acEdicionEspecial;
    }
    promedioVentasFD() {
        if (this.cntFotoD > 0) {
            return this.acPrecioFD / this.cntFotoD;
        }
        else
            return 0;
    }
}
