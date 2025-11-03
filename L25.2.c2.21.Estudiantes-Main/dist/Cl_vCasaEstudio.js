import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
;
export default class Cl_vCasaEstudio extends Cl_vGeneral {
    constructor() {
        super({ formName: "mainForm" });
        this._vEstudiante = new Cl_vEstudiante();
        this.dataPersona = this.crearHTMLElement({ elementName: "dataPersona" });
        this.lblcantidadMenores = this.crearHTMLElement({ elementName: "lblcantidadMenores", });
        this.lblcantidadMenoresAprobados = this.crearHTMLElement({ elementName: "lblcantidadMenoresAprobados", });
        this.lblporcentajeAprobadosMenores20Años = this.crearHTMLElement({ elementName: "lblporcentajeAprobadosMenores20Años", });
        this.lblcantidadNoAprobados = this.crearHTMLElement({ elementName: "lblcantidadNoAprobados", });
        this.lblcantidadSolicitudes = this.crearHTMLElement({ elementName: "lblcantidadSolicitudes", });
        this.lblporcentajeNoFueronAprobadas = this.crearHTMLElement({ elementName: "lblporcentajeNoFueronAprobadas", });
        this.btAgregarEstudiante = this.crearHTMLButtonElement({ elementName: "btAgregarEstudiante",
            onclick: () => {
                this.show({ ver: false });
                this.vEstudiante.show();
            },
        });
        this.dataPersona.innerHTML = "";
        this.vEstudiante.show({ ver: false });
    }
    set controlador(controlador) {
        super.controlador = controlador;
        this.vEstudiante.controlador = controlador;
    }
    get vEstudiante() {
        return this._vEstudiante;
    }
    reportarPersona({ dataPersona, cantidadMenores, cantidadMenoresAprobados, porcentajeAprobadosMenores20Años, cantidadNoAprobados, cantidadSolicitudes, porcentajeNoFueronAprobadas }) {
        this.dataPersona.innerHTML += `
        <td class="colString">${dataPersona.cedula}</td>
        <td class="colString">${dataPersona.nombre}</td>
        <td class="colNumber">${dataPersona.edad}</td>
        <td class="colString">${dataPersona.sexo}</td>
        <td class="colNumber">${dataPersona.estadoCivil}</td>
        <td class="colNumber">${dataPersona.nota ? dataPersona.nota : "--"}</td>
        <td class="colCurrency">${dataPersona.solicitudBeca}</td>
    `;
        this.lblcantidadMenores.innerHTML = cantidadMenores.toFixed(0);
        this.lblcantidadMenoresAprobados.innerHTML = cantidadMenoresAprobados.toFixed(0);
        this.lblporcentajeAprobadosMenores20Años.innerHTML = porcentajeAprobadosMenores20Años.toFixed(0);
        this.lblcantidadNoAprobados.innerHTML = cantidadNoAprobados.toFixed(0);
        this.lblcantidadSolicitudes.innerHTML = cantidadSolicitudes.toFixed(0);
        this.lblporcentajeNoFueronAprobadas.innerHTML = porcentajeNoFueronAprobadas.toFixed(0);
    }
    show({ ver = true } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vEstudiante.show({ ver: false });
        }
    }
}
