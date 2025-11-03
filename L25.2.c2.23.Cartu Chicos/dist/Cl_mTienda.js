import Cl_mLaser from "./Cl_mLaser.js";
export default class Cl_mTienda {
    constructor() {
        this.cntLaser = 0;
        this.cntImpresora = 0;
    }
    construtor() {
        this.cntLaser = 0;
        this.cntImpresora = 0;
    }
    procesarImpresora(Impresora) {
        this.cntImpresora++;
        if (Impresora instanceof Cl_mLaser) {
            this.cntLaser++;
        }
    }
    cantidadLaser() {
        return this.cntLaser;
    }
    cantImpresoras() {
        return this.cntImpresora;
    }
    porcentajeImpresoraLaser() {
        if (this.cntImpresora > 0) {
            return (this.cntLaser / this.cntImpresora) * 100;
        }
        else
            return 0;
    }
}
