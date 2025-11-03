import Cl_vComerciante from "./Cl_vComerciante.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
export default class Cl_vCredito extends Cl_vGeneral {
    constructor() {
        super({ formName: "mainForm" });
        this._vComerciante = new Cl_vComerciante();
        this.dataPersona = this.crearHTMLElement({ elementName: "dataPersona" });
        this.lblCreditosAprobados = this.crearHTMLElement({ elementName: "lblCreditosAprobados" });
        this.lblCreditosRechazados = this.crearHTMLElement({ elementName: "lblCreditosRechazados" });
        this.btAgregarComerciante = this.crearHTMLButtonElement({
            elementName: "btAgregarComerciante",
            onclick: () => {
                this.show({ ver: false });
                this._vComerciante.show();
            }
        });
        this.dataPersona.innerHTML = "";
        this.vComerciante.show({ ver: false });
    }
    set controlador(controlador) {
        super.controlador = controlador;
        this.vComerciante.controlador = controlador;
    }
    get vComerciante() {
        return this._vComerciante;
    }
    reportarSolicitud({ dataPersona, creditosAprobados, creditosRechazados }) {
        this.dataPersona.innerHTML += `
        <td class="colString">${dataPersona.cedula}</td>
        <td class="colString">${dataPersona.nombre}</td>
        <td class="colNumber">${dataPersona.edad}</td>
        <td class="colString">${dataPersona.sexo}</td>
        <td class="colNumber">${dataPersona.edoCivil}</td>
        <td class="colNumber">${dataPersona.porcAprobado}</td>`;
        this.lblCreditosAprobados.innerHTML = creditosAprobados.toString();
        this.lblCreditosRechazados.innerHTML = creditosRechazados.toString();
    }
}
