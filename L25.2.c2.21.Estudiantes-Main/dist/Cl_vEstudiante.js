import Cl_vPersona from "./Cl_vPersona.js";
export default class Cl_vEstudiante extends Cl_vPersona {
    constructor() {
        super();
        this.divNota = this.crearHTMLElement({ elementName: "divNota" });
        this.inNota = this.crearHTMLInputElement({ elementName: "inNota" });
        this.btAceptar = this.crearHTMLButtonElement({ elementName: "btAceptarEstudiante",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarEstudiante({
                    nombre: this.nombre,
                    cedula: this.cedula,
                    edad: this.edad,
                    sexo: this.sexo,
                    estadoCivil: this.estadoCivil,
                    nota: this.nota,
                });
            },
        });
    }
    get nota() {
        return +this.inNota.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Estudiante" });
        this.inNota.value = "";
        this.divNota.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
