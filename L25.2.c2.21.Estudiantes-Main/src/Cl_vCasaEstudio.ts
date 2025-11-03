import Cl_vEstudiante from "./Cl_vEstudiante.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";

interface iPersona {nota?:number; nombre: string;cedula:string;edad:number;sexo:string;estadoCivil:number,solicitudBeca:string};


export default class Cl_vCasaEstudio extends Cl_vGeneral {
    private _vEstudiante: Cl_vEstudiante;
    private dataPersona: HTMLElement;
    private lblcantidadMenores: HTMLElement;
    private lblcantidadMenoresAprobados: HTMLElement;
    private lblporcentajeAprobadosMenores20Años: HTMLElement;
    private lblcantidadNoAprobados: HTMLElement;
    private lblcantidadSolicitudes: HTMLElement;
    private lblporcentajeNoFueronAprobadas: HTMLElement;
    private btAgregarEstudiante: HTMLElement;

    constructor() {
        super({ formName: "mainForm" });
        this._vEstudiante = new Cl_vEstudiante();
        this.dataPersona = this.crearHTMLElement({ elementName: "dataPersona" });
        this.lblcantidadMenores= this.crearHTMLElement({ elementName: "lblcantidadMenores", });
        this.lblcantidadMenoresAprobados= this.crearHTMLElement({ elementName: "lblcantidadMenoresAprobados", });
        this.lblporcentajeAprobadosMenores20Años = this.crearHTMLElement({ elementName: "lblporcentajeAprobadosMenores20Años",});
        this.lblcantidadNoAprobados = this.crearHTMLElement({ elementName: "lblcantidadNoAprobados",});
        this.lblcantidadSolicitudes = this.crearHTMLElement({ elementName: "lblcantidadSolicitudes",});
        this.lblporcentajeNoFueronAprobadas= this.crearHTMLElement({ elementName: "lblporcentajeNoFueronAprobadas",});
        this.btAgregarEstudiante = this.crearHTMLButtonElement({elementName: "btAgregarEstudiante",
            onclick: () => {
                this.show({ ver: false });
                this.vEstudiante.show();
            },
        });
        this.dataPersona.innerHTML = "";
        this.vEstudiante.show({ ver: false });
    }
    set controlador(controlador: Cl_controlador) {
        super.controlador = controlador;
        this.vEstudiante.controlador = controlador;
    }
    get vEstudiante() {
        return this._vEstudiante;
    }

    reportarPersona({ dataPersona,cantidadMenores,cantidadMenoresAprobados,porcentajeAprobadosMenores20Años,cantidadNoAprobados,cantidadSolicitudes,porcentajeNoFueronAprobadas}: 
        {dataPersona:iPersona ;cantidadMenores:number;cantidadMenoresAprobados:number; porcentajeAprobadosMenores20Años:number;cantidadNoAprobados:number;cantidadSolicitudes:number;porcentajeNoFueronAprobadas:number}): void {
        this.dataPersona.innerHTML += `
        <td class="colString">${dataPersona.cedula}</td>
        <td class="colString">${dataPersona.nombre}</td>
        <td class="colNumber">${dataPersona.edad}</td>
        <td class="colString">${dataPersona.sexo}</td>
        <td class="colNumber">${dataPersona.estadoCivil}</td>
        <td class="colNumber">${dataPersona.nota? dataPersona.nota : "--"}</td>
        <td class="colCurrency">${dataPersona.solicitudBeca}</td>
    `;
        this.lblcantidadMenores.innerHTML = cantidadMenores.toFixed(0);
        this.lblcantidadMenoresAprobados.innerHTML = cantidadMenoresAprobados.toFixed(0);
        this.lblporcentajeAprobadosMenores20Años.innerHTML= porcentajeAprobadosMenores20Años.toFixed(0);
        this.lblcantidadNoAprobados.innerHTML = cantidadNoAprobados.toFixed(0);
        this.lblcantidadSolicitudes.innerHTML = cantidadSolicitudes.toFixed(0);
        this.lblporcentajeNoFueronAprobadas.innerHTML= porcentajeNoFueronAprobadas.toFixed(0);
    }

    show({ ver = true }: { ver?: boolean } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vEstudiante.show({ ver: false });
        }
    }
}
 