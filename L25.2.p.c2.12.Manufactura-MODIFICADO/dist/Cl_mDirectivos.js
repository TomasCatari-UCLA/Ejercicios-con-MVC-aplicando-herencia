import Cl_mEmpleado from "./Cl_mEmpleado.js";
export default class Cl_mDirectivos extends Cl_mEmpleado {
    constructor({ id, nombre, sueldoBase, antiguedad, nocturno }) {
        super({ id, nombre, sueldoBase, antiguedad });
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
        return this.adicional() + this.sueldoBase + this.bonoAntiguedad();
    }
    //if(this.VerificacionNocturno()) = if(this.VerificacionNocturno()===true)
    bonoAntiguedad() {
        if (this.VerificacionNocturno()) {
            return 2 * (10 * this.antiguedad);
        }
        else
            return 10 * this.antiguedad;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { nocturno: this.nocturno });
    }
}
