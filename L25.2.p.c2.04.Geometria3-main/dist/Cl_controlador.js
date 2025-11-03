import Cl_mCuadrado from "./Cl_mCuadrado.js";
import Cl_mCirculo from "./Cl_mCirculo.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarCuadrado(data) {
        const mCuadrado = new Cl_mCuadrado({
            codigo: data.codigo,
            coordX: data.coordX,
            coordY: data.coordY,
            lado: data.lado,
        });
        this.modelo.procesarFigura(mCuadrado);
        this.reportarFigura({ mFigura: mCuadrado });
    }
    procesarCirculo(data) {
        const mCirculo = new Cl_mCirculo({
            codigo: data.codigo,
            coordX: data.coordX,
            coordY: data.coordY,
            radio: data.radio,
        });
        this.modelo.procesarFigura(mCirculo);
        this.reportarFigura({ mFigura: mCirculo });
    }
    reportarFigura({ mFigura }) {
        this.vista.reportarFigura({
            dataFigura: mFigura.toJSON(),
            areaTotal: this.modelo.areaTotal(),
            figuraMayor: this.modelo.figuraMayorEspacio(),
        });
        this.vista.show(); // Vuelve a la vista principal después de procesar
    }
}
