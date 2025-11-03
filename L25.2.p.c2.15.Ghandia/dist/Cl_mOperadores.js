import Cl_mEmpleado from "./Cl_mEmpleado.js";
export default class Cl_mOperadores extends Cl_mEmpleado {
    constructor({ id, nombre, sueldoBase, horaExtra = 0, }) {
        super({ id, nombre, sueldoBase });
        this._horaExtra = 0;
        this.horaExtra = horaExtra;
    }
    set horaExtra(horaExtra) {
        this._horaExtra = +horaExtra;
    }
    get horaExtra() {
        return this._horaExtra;
    }
    prima() {
        return this.horaExtra * 5;
    }
    sueldoMensual() {
        return this.prima() + this.sueldoBase;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { horaExtra: this.horaExtra });
    }
}
