import Cl_mCirculo from "./Cl_mCirculo.js";
import Cl_mCuadrado from "./Cl_mCuadrado.js";
import Cl_mFigura from "./Cl_mFigura.js";

export default class Cl_mProcesador {
  private acAreaCuadrados: number = 0;
  private acAreaCirculos: number = 0;

  procesarFigura(figura: Cl_mFigura) {
    // Acumula el área dependiendo del tipo de figura
    if (figura instanceof Cl_mCuadrado) {
      this.acAreaCuadrados += figura.area();
    } else if (figura instanceof Cl_mCirculo) {
      this.acAreaCirculos += figura.area();
    }
  }

  // Devuelve el área total sumando las áreas de todas las figuras
  areaTotal(): number {
    return this.acAreaCuadrados + this.acAreaCirculos;
  }

  // Compara la suma de las áreas de cada tipo y devuelve el nombre del tipo con mayor área total
  figuraMayorEspacio(): string {
    if (this.acAreaCuadrados > this.acAreaCirculos) {
      return "Cuadrado";
    } else if (this.acAreaCirculos > this.acAreaCuadrados) {
      return "Círculo";
    } else {
      // Maneja el caso en que las áreas totales sean iguales
      return "Empate";
    }
  }
}