import Cl_mFigura from "./Cl_mFigura.js";
export default class Cl_mCuadrado extends Cl_mFigura {
    constructor({ codigo, coordX, coordY, lado, }) {
        // Llama al constructor de la clase padre (Cl_mFigura)
        super({ codigo, coordX, coordY });
        this._lado = 0;
        this.lado = lado;
    }
    set lado(lado) {
        this._lado = +lado;
    }
    get lado() {
        return this._lado;
    }
    // Sobrescritura de los métodos con la lógica del cuadrado
    area() {
        return this.lado * this.lado;
    }
    perimetro() {
        return 4 * this.lado;
    }
    // Amplía el método toJSON del padre para incluir la propiedad 'lado'
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { lado: this.lado, tipo: "Cuadrado" });
    }
}
