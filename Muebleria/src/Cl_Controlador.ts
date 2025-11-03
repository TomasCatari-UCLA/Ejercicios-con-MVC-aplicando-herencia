import Cl_mMuebleria from "./Cl_mMuebleria.js";
import Cl_mMobilario from "./Cl_mMobilario.js";
import Cl_mComedor from "./Cl_mComedor.js";
import Cl_mMueble from "./Cl_mMueble.js";
import Cl_vMuebleria from "./Cl_vMuebleria.js";
import { iComedor } from "./Cl_vComedor.js";
import { iMueble } from "./Cl_vMueble.js";

export default class Cl_Controlador {
  public modelo: Cl_mMuebleria;
  public vista: Cl_vMuebleria;
  constructor(modelo: Cl_mMuebleria, vista: Cl_vMuebleria) {
    this.modelo = modelo;
    this.vista = vista;
  }
  procesarMobilarioMueble(data: iMueble) {
    let mMueble = new Cl_mMueble({
      madera: data.madera,
      factura: data.factura,
      tela: data.tela,
    
    });
    this.modelo.procesarMobilario(mMueble);
    this.reportarMobilario({ mMobilario: mMueble });
  }
  procesarMobilarioComedor(data: iComedor) {
    let mComedor = new Cl_mComedor({
      madera: data.madera,
      factura: data.factura,
      sillas: data.sillas
    });
    this.modelo.procesarMobilario(mComedor);
    this.reportarMobilario({ mMobilario: mComedor });
  }
  reportarMobilario({ mMobilario }: { mMobilario: Cl_mMobilario }) {
    this.vista.reportarMobilario({
      dataMobilario: mMobilario.toJSON(),
      precioM3: mMobilario.precioM3(),
      m3: mMobilario.m3(),
      incremento: mMobilario.incremento(),
      precio: mMobilario.precio(),
      porcentajeComedor: this.modelo.porcentajeComedor(),
      totalVendido:this.modelo.totalVendido(),
      mayorVendido:this.modelo.mayorVendido(),
   
    });
    this.vista.show();
  }
}
// a probar si funciona
