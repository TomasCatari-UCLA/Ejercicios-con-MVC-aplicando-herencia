import Cl_mEstudiante from "./Cl_mEstudiante.js";
export default class Cl_mCasaEstudio {
    constructor() {
        this.cntMenores = 0;
        this.cntAprobadosMenores18 = 0;
        this.cntAprobadosMenores20 = 0;
        this.cntNoAprobados = 0;
        this.cntSolicitudes = 0;
        this.cntMenores20 = 0;
        this.cntMenores = 0;
        this.cntAprobadosMenores18 = 0;
        this.cntAprobadosMenores20 = 0;
        this.cntNoAprobados = 0;
        this.cntSolicitudes = 0;
        this.cntMenores20 = 0;
    }
    procesarPersona(Persona) {
        if (Persona instanceof Cl_mEstudiante) {
            if (Persona.edad < 18) {
                this.cntMenores++;
            }
        }
        if (Persona instanceof Cl_mEstudiante) {
            if (Persona.edad < 18 && Persona.nota > 17) {
                this.cntAprobadosMenores18++;
            }
        }
        if (Persona instanceof Cl_mEstudiante) {
            if (Persona.edad <= 20) {
                this.cntMenores20++;
            }
        }
        if (Persona instanceof Cl_mEstudiante) {
            if (Persona.edad <= 20 && Persona.nota > 17 && Persona.estadoCivil === 1 || Persona.estadoCivil === 3) {
                this.cntAprobadosMenores20++;
            }
        }
        if (Persona instanceof Cl_mEstudiante) {
            if (Persona.solicitudBeca() === "No") {
                this.cntNoAprobados++;
            }
        }
        this.cntSolicitudes++;
    }
    cantidadMenores() {
        return this.cntMenores;
    }
    cantidadMenoresAprobados() {
        return this.cntAprobadosMenores18;
    }
    porcentajeAprobadosMenores20Años() {
        return (this.cntAprobadosMenores20 / this.cntMenores20) * 100;
    }
    cantidadNoAprobados() {
        return this.cntNoAprobados;
    }
    cantidadSolicitudes() {
        return this.cntSolicitudes;
    }
    porcentajeNoFueronAprobadas() {
        return (this.cantidadNoAprobados() / this.cantidadSolicitudes()) * 100;
    }
}
