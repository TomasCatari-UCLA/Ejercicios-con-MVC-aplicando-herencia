import Cl_vEmpleado from "./Cl_vEmpleado.js";
export default class Cl_vDirectivos extends Cl_vEmpleado {
    constructor() {
        super();
        this.divInNocturno = this.crearHTMLElement({ elementName: "divInNocturno" });
        this.inNocturno = this.crearHTMLInputElement({ elementName: "inNocturno" });
        this.btAceptar = this.crearHTMLButtonElement({
            elementName: "btAceptarDirectivo",
            onclick: () => {
                var _a;
                return (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarEmpleadoDirectivos({
                    id: this.id,
                    nombre: this.Nombre,
                    sueldoBase: this.sueldoBase,
                    antiguedad: this.antiguedad,
                    nocturno: this.nocturno
                });
            },
        });
    }
    get nocturno() {
        return this.inNocturno.value;
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver, nombreTipo: "Directivo" });
        this.inNocturno.value = "";
        this.divInNocturno.hidden = ver === false;
        this.btAceptar.hidden = ver === false;
    }
}
