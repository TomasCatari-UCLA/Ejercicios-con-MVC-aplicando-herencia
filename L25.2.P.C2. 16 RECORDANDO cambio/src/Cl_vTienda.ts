import Cl_controlador from './Cl_controlador.js';
import Cl_vFotografia from './Cl_vFotografia.js';
import Cl_vGeneral from './Cl_vGeneral.js';
import Cl_vVideo from './Cl_vVideo.js';

interface iPromocion {
    
    codigo: string;
    costo: number;
    esUrgente:boolean;
    tipoF?: string;
    hD?: string;
    descuento: number;
    incremento: number;
    edicionEspecial: number;
    precioF: number;
    tipo?: string;
}

export default class Cl_vTienda extends Cl_vGeneral {

    private _vFotografia: Cl_vFotografia;
    private _vVideo: Cl_vVideo;
    private dataPromocion: HTMLElement;
    private lblTotalVendido: HTMLElement;
    private lblCantFotoD: HTMLElement;
    private lblSubTotalFD: HTMLElement;
    private lblPromedioVentasFD: HTMLElement;
    private lblMontoFacturaEdicionEspecial: HTMLElement;
    private btAgregarFotografia: HTMLElement;
    private btAgregarVideo: HTMLElement;
    constructor() {
        super({ formName: "mainForm" });
        this._vFotografia = new Cl_vFotografia();
        this._vVideo = new Cl_vVideo();
        this.dataPromocion = this.crearHTMLElement({ elementName: "dataPromocion" });
        this.lblTotalVendido = this.crearHTMLElement({ elementName: "lblTotalVendido", });
        this.lblCantFotoD = this.crearHTMLElement({ elementName: "lblCantFotoD", });
        this.lblSubTotalFD= this.crearHTMLElement({elementName: "lblSubTotalFD",});
        this.lblPromedioVentasFD = this.crearHTMLElement({ elementName: "lblPromedioVentasFD",});
        this.lblMontoFacturaEdicionEspecial= this.crearHTMLElement({elementName:"lblMontoFacturaEdicionEspecial"})

        this.btAgregarFotografia = this.crearHTMLButtonElement({
            elementName: "btAgregarFotografia",
            onclick: () => {
                this.show({ ver: false });
                this.vFotografia.show();
            },
        });
        this.btAgregarVideo = this.crearHTMLButtonElement({
            elementName: "btAgregarVideo",
            onclick: () => {
                this.show({ ver: false });
                this.vVideo.show();
            },
        });

        this.dataPromocion.innerHTML = "";
        this.vFotografia.show({ ver: false });
        this.vVideo.show({ ver: false });
    }

    set controlador(controlador: Cl_controlador) {
        super.controlador = controlador;
        this.vFotografia.controlador = controlador;
        this.vVideo.controlador = controlador;
    }

    get vFotografia() {
        return this._vFotografia;
    }
    get vVideo() {
        return this._vVideo;
    }

    reportarPromocion({
        dataPromocion,
        totalVendido,
        cantFotoD,
        subTotalFD,
        promedioVentasFD,
        montoFacturaEdicionEspecial,
     
    }: {
        dataPromocion:iPromocion;
        totalVendido: number;
        cantFotoD:number;
        subTotalFD: number;
        promedioVentasFD:number;
        montoFacturaEdicionEspecial: number;
    }) {
        this.dataPromocion.innerHTML += `
        <td class="colString">${dataPromocion.codigo}</td>
        <td class="colNumber">${dataPromocion.costo}</td>
         <td class="colCheckbox">${dataPromocion.esUrgente}</td>
        <td class="colString">${dataPromocion.tipoF ? dataPromocion.tipoF : "--"}</td>
        <td class="colString">${dataPromocion.hD ? dataPromocion.hD : "--"}</td>
        <td class="colNumber">${dataPromocion.descuento.toFixed(2)}</td>
        <td class="colNumber">${dataPromocion.incremento.toFixed(2)}</td>
        <td class="colNumber">${dataPromocion.edicionEspecial.toFixed(2)}</td>
        <td class="colNumber">${dataPromocion.precioF.toFixed(2)}</td>
        
    `;
        this.lblTotalVendido.innerHTML = totalVendido.toFixed(2);
        this.lblCantFotoD.innerHTML= cantFotoD.toString();
        this.lblSubTotalFD.innerHTML= subTotalFD.toFixed(2);
        this.lblPromedioVentasFD.innerHTML = promedioVentasFD.toFixed(2);
        this.lblMontoFacturaEdicionEspecial.innerHTML= montoFacturaEdicionEspecial.toString();
    }

    show({ ver = true }:{ ver?:boolean } ={ ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vFotografia.show({ ver: false });
            this.vVideo.show({ ver: false });
        }
    }
}
