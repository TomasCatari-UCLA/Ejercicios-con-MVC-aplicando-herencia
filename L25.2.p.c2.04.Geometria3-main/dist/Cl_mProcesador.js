import Cl_mCirculo from "./Cl_mCirculo.js";
import Cl_mCuadrado from "./Cl_mCuadrado.js";
export default class Cl_mProcesador {
    constructor() {
        this.acAreaCuadrados = 0;
        this.acAreaCirculos = 0;
    }
    procesarFigura(figura) {
        // Acumula el área dependiendo del tipo de figura
        if (figura instanceof Cl_mCuadrado) {
            this.acAreaCuadrados += figura.area();
        }
        else if (figura instanceof Cl_mCirculo) {
            this.acAreaCirculos += figura.area();
        }
    }
    // Devuelve el área total sumando las áreas de todas las figuras
    areaTotal() {
        return this.acAreaCuadrados + this.acAreaCirculos;
    }
    // Compara la suma de las áreas de cada tipo y devuelve el nombre del tipo con mayor área total
    figuraMayorEspacio() {
        if (this.acAreaCuadrados > this.acAreaCirculos) {
            return "Cuadrado";
        }
        else if (this.acAreaCirculos > this.acAreaCuadrados) {
            return "Círculo";
        }
        else {
            // Maneja el caso en que las áreas totales sean iguales
            return "Empate";
        }
    }
}
