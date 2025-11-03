import Cl_mProcesador from "./Cl_mProcesador.js";
import Cl_mFigura from "./Cl_mFigura.js";
import Cl_mCuadrado from "./Cl_mCuadrado.js";
import Cl_mCirculo from "./Cl_mCirculo.js";
import Cl_vGeometria from "./Cl_vGeometria.js";
import { iCuadrado } from "./Cl_vCuadrado.js";
import { iCirculo } from "./Cl_vCirculo.js";

export default class Cl_controlador {
  public modelo: Cl_mProcesador;
  public vista: Cl_vGeometria;

  constructor(modelo: Cl_mProcesador, vista: Cl_vGeometria) {
    this.modelo = modelo;
    this.vista = vista;
  }

  procesarCuadrado(data: iCuadrado) {
    const mCuadrado = new Cl_mCuadrado({
      codigo: data.codigo,
      coordX: data.coordX,
      coordY: data.coordY,
      lado: data.lado,
    });
    this.modelo.procesarFigura(mCuadrado);
    this.reportarFigura({ mFigura: mCuadrado });
  }

  procesarCirculo(data: iCirculo) {
    const mCirculo = new Cl_mCirculo({
      codigo: data.codigo,
      coordX: data.coordX,
      coordY: data.coordY,
      radio: data.radio,
    });
    this.modelo.procesarFigura(mCirculo);
    this.reportarFigura({ mFigura: mCirculo });
  }

  reportarFigura({ mFigura }: { mFigura: Cl_mFigura }) {
    this.vista.reportarFigura({
      dataFigura: mFigura.toJSON(),
      areaTotal: this.modelo.areaTotal(),
      figuraMayor: this.modelo.figuraMayorEspacio(),
    });
    this.vista.show(); // Vuelve a la vista principal después de procesar
  }
}