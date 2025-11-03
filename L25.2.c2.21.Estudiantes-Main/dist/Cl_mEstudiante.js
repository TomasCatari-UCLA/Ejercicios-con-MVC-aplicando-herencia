import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mEstudiante extends Cl_mPersona {
    constructor({ nota = 0, nombre = "", cedula = "", edad = 0, sexo = "", estadoCivil = 0 }) {
        super({ nombre, cedula, edad, sexo, estadoCivil });
        this._nota = 0;
        this.nota = nota;
    }
    set nota(nota) {
        this._nota = nota;
    }
    get nota() {
        return +this._nota;
    }
    solicitudBeca() {
        if (this.nota > 17 && this.edad < 20 && this.estadoCivil === 1) {
            return "Si";
        }
        if (this.nota > 17 && this.edad < 20 && this.estadoCivil === 2) {
            return "Si";
        }
        if (this.nota > 17 && this.edad < 20 && this.estadoCivil === 3) {
            return "Si";
        }
        if (this.nota > 17 && this.edad < 20 && this.estadoCivil === 4) {
            return "Si";
        }
        if (this.nota > 15 && this.edad >= 20 && this.estadoCivil === 2) {
            return "Si";
        }
        else
            return "No";
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { nota: this.nota });
    }
}
