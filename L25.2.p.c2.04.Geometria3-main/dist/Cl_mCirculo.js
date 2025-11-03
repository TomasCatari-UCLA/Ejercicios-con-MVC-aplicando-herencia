import Cl_mFigura from "./Cl_mFigura.js";
export default class Cl_mCirculo extends Cl_mFigura {
    constructor({ codigo, coordX, coordY, radio, }) {
        // Llama al constructor de la clase padre (Cl_mFigura)
        super({ codigo, coordX, coordY });
        this._radio = 0;
        this.radio = radio;
    }
    set radio(radio) {
        this._radio = +radio;
    }
    get radio() {
        return this._radio;
    }
    // Sobrescritura de los métodos con la lógica del círculo
    area() {
        return Math.PI * this.radio * this.radio;
    }
    perimetro() {
        return 2 * Math.PI * this.radio;
    }
    // Amplía el método toJSON del padre para incluir la propiedad 'radio'
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { radio: this.radio, tipo: "Círculo" });
    }
}
