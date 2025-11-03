import Cl_mEmpleado from "./Cl_mEmpleado.js";
export default class Cl_mDirectivos extends Cl_mEmpleado {
    constructor({ id, nombre, sueldoBase, nocturno }) {
        super({ id, nombre, sueldoBase });
        this._nocturno = "";
        this.nocturno = nocturno;
    }
    set nocturno(nocturno) {
        this._nocturno = nocturno;
    }
    get nocturno() {
        return this._nocturno;
    }
    // COMENTARIO PARA QUE WILLY NO LE DE ANSIEDAD
    VerificacionNocturno() {
        if (this.nocturno === "Si") {
            return true;
        }
        else
            return false;
    }
    adicional() {
        if (this.VerificacionNocturno()) {
            return this.sueldoBase * 0.20;
        }
        else
            return 0;
    }
    sueldoMensual() {
        return this.adicional() + this.sueldoBase;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { nocturno: this.nocturno });
    }
}
