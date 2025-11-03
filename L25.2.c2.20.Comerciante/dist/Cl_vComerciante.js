import Cl_mPersona from "./Cl_vPersona.js";
export default class Cl_vComerciante extends Cl_mPersona {
    constructor() {
        super();
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptar",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarSolicitud({
                    cedula: this.cedula,
                    nombre: this.nombre,
                    edad: this.edad,
                    sexo: this.sexo,
                    edoCivil: this.edoCivil
                });
            },
        });
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Comerciante" });
        this.btAceptar.hidden = ver === false;
    }
}
