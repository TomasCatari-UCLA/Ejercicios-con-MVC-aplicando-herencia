import Cl_mAdulto from "./Cl_mAdulto.js";
import Cl_mNiño from "./Cl_mNiño.js";


export default class Cl_controlador {
   
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarNiño(data) {
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

  procesarAdulto(data) {
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

  reportarDisfraz({ mDisfraz}) {
    this.vista.reportarDisfraz({
      dataDisfraz: mDisfraz.toJSON(),
      totalVendido: this.modelo.totalVendido(),
      cantAdulFem: this.modelo.cantAdulFem(),
      porcentajeDisfFemTallaS: this.modelo.porcentajeDisfFemTallaS(),
    });
    this.vista.show(); // Vuelve a la vista principal después de procesar
  }
}

