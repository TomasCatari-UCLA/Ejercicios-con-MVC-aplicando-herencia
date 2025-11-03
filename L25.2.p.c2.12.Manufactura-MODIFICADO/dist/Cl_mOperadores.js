import Cl_mEmpleado from "./Cl_mEmpleado.js";
export default class Cl_mOperadores extends Cl_mEmpleado {
    constructor({ id, nombre, sueldoBase, antiguedad, horaExtra = 0, }) {
        super({ id, nombre, sueldoBase, antiguedad });
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
        return this.prima() + this.sueldoBase + this.bonoAntiguedad();
    }
    bonoAntiguedad() {
        if (this.horaExtra > 30) {
            return 2 * (10 * this.antiguedad);
        }
        else
            return 10 * this.antiguedad;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { horaExtra: this.horaExtra });
    }
}
