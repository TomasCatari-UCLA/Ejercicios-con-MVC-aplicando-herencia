import Cl_vLaser from "./Cl_vLaser.js";
import Cl_vTinta from "./Cl_vTinta.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";

interface iImpresora {id:number;tipoTinta?: number; cantToner?:number;precioPagarRecarga: number}

export default class Cl_vTienda extends Cl_vGeneral {
    private _vTinta: Cl_vTinta;
    private _vLaser: Cl_vLaser;
    private dataImpresora: HTMLElement;
    private lblcantidadLaser: HTMLElement;
    private lblcantImpresoras: HTMLElement;
    private lblporcentajeImpresoraLaser: HTMLElement;
    private btAgregarTinta: HTMLElement;
    private btAgregarLaser: HTMLElement;

    constructor() {
        super({ formName: "mainForm" });
        this._vTinta = new Cl_vTinta();
        this._vLaser = new Cl_vLaser();
        this.dataImpresora = this.crearHTMLElement({ elementName: "dataImpresora" });
        this.lblcantidadLaser = this.crearHTMLElement({ elementName: "lblcantidadLaser", });
        this.lblporcentajeImpresoraLaser = this.crearHTMLElement({ elementName: "lblporcentajeImpresoraLaser", });
        this.lblcantImpresoras = this.crearHTMLElement({ elementName: "lblcantImpresoras",});

        this.btAgregarTinta = this.crearHTMLButtonElement({
            elementName: "btAgregarTinta",
            onclick: () => {
                this.show({ ver: false });
                this.vTinta.show();
            },
        });
        this.btAgregarLaser = this.crearHTMLButtonElement({
            elementName: "btAgregarLaser",
            onclick: () => {
                this.show({ ver: false });
                this.vLaser.show();
            },
        });

        this.dataImpresora.innerHTML = "";
        this.vTinta.show({ ver: false });
        this.vLaser.show({ ver: false });
    }

    set controlador(controlador: Cl_controlador) {
        super.controlador = controlador;
        this.vTinta.controlador = controlador;
        this.vLaser.controlador = controlador;
    }

    get vTinta() {
        return this._vTinta;
    }
    get vLaser() {
        return this._vLaser;
    }

    reportarImpresora({ dataImpresora,cantidadLaser,porcentajeImpresoraLaser, cantImpresoras,}: 
        {dataImpresora:iImpresora ;cantidadLaser: number;porcentajeImpresoraLaser: number,cantImpresoras: number;}): void {
        this.dataImpresora.innerHTML += `
        <td class="colNumber">${dataImpresora.id}</td>
        <td class="colNumber">${dataImpresora.tipoTinta ? dataImpresora.tipoTinta : "--"}</td>
        <td class="colNumber">${dataImpresora.cantToner ? dataImpresora.cantToner : "--"}</td>
        <td class="colCurrency">${dataImpresora.precioPagarRecarga.toFixed(2)}</td>
        
    `;
        this.lblcantidadLaser.innerHTML = cantidadLaser.toFixed(0);
                this.lblcantImpresoras.innerHTML = cantImpresoras.toFixed(0);
        this.lblporcentajeImpresoraLaser.innerHTML= porcentajeImpresoraLaser.toFixed(2);

    }

    show({ ver = true }: { ver?: boolean } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vTinta.show({ ver: false });
            this.vLaser.show({ ver: false });
        }
    }
}
