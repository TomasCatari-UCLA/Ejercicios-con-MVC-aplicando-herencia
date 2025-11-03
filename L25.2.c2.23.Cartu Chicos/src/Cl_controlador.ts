import Cl_mLaser from "./Cl_mLaser.js";
import Cl_mTinta from "./Cl_mTinta.js";
import Cl_mImpresora from "./Cl_mImpresora.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vTienda from "./Cl_vTienda.js";
import { iLaser } from "./Cl_vLaser.js";
import { iTinta } from "./Cl_vTinta.js"
export default class Cl_controlador {
    public modelo: Cl_mTienda;
    public vista: Cl_vTienda;

    constructor(modelo: Cl_mTienda, vista: Cl_vTienda) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarTinta(data: iTinta) {
    let mTinta = new Cl_mTinta({
      id: data.id,
      tipoTinta: data.tipoTinta,
    });
    this.modelo.procesarImpresora(mTinta);
    this.reportarImpresora({ mImpresora: mTinta });
  }

  procesarLaser(data: iLaser) {
    let mLaser = new Cl_mLaser({
      id: data.id,
      cantToner: data.cantToner,

    });
    this.modelo.procesarImpresora(mLaser);
    this.reportarImpresora({ mImpresora: mLaser });
  }

  reportarImpresora({ mImpresora }: { mImpresora: Cl_mImpresora }) {
    this.vista.reportarImpresora({
      dataImpresora: mImpresora.toJSON(),
      cantidadLaser: this.modelo.cantidadLaser(),
      cantImpresoras: this.modelo.cantImpresoras(),
      porcentajeImpresoraLaser: this.modelo.porcentajeImpresoraLaser(),
    });
    this.vista.show(); // Vuelve a la vista principal después de procesar
  }
}

