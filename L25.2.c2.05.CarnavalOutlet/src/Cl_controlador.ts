import Cl_mAdulto from "./Cl_mAdulto.js";
import Cl_mNiño from "./Cl_mNiño.js";
import Cl_mDisfraz from "./Cl_mDisfraz.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vCarnaval from "./Cl_vCarnaval.js";
import { iAdulto } from "./Cl_vAdulto.js";
import {iNiño} from "./Cl_vNiño.js"
export default class Cl_controlador {
    public modelo: Cl_mTienda;
    public vista: Cl_vCarnaval;

    constructor(modelo: Cl_mTienda, vista: Cl_vCarnaval) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarNiño(data: iNiño) {
    let mNiño = new Cl_mNiño({
      codigo: data.codigo,
      nombre: data.nombre,
      talla: data.talla,
      precio: data.precio,
      accesorio: data.accesorio,
    });
    this.modelo.procesarDisfraz(mNiño);
    this.reportarDisfraz({ mDisfraz: mNiño });
  }

  procesarAdulto(data: iAdulto) {
    let mAdulto = new Cl_mAdulto({
      codigo: data.codigo,
      nombre: data.nombre,
      talla: data.talla,
      precio: data.precio,
      sexo: data.sexo,

    });
    this.modelo.procesarDisfraz(mAdulto);
    this.reportarDisfraz({ mDisfraz: mAdulto });
  }

  reportarDisfraz({ mDisfraz }: { mDisfraz: Cl_mDisfraz }) {
    this.vista.reportarDisfraz({
      dataDisfraz: mDisfraz.toJSON(),
      totalVendido: this.modelo.totalVendido(),
      cantAdulFem: this.modelo.cantAdulFem(),
      porcentajeDisfFemTallaS: this.modelo.porcentajeDisfFemTallaS(),
    });
    this.vista.show(); // Vuelve a la vista principal después de procesar
  }
}

