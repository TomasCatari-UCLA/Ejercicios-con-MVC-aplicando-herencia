import Cl_vAdulto from "./Cl_vAdulto.js";
import Cl_vNiño from "./Cl_vNiño.js";
import Cl_vGeneral from "./Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";

interface iDisfraz {
    codigo: string;
    nombre: string;
    talla: string;
    precio: number;
    accesorio?: string;
    sexo?: string;
    precioFinal: number;
    tipo?: string;
}

export default class Cl_vCarnaval extends Cl_vGeneral {
    private _vNiño: Cl_vNiño;
    private _vAdulto: Cl_vAdulto;
    private dataDisfraz: HTMLElement;
    private lblTotalVendido: HTMLElement;
    private lblCantAdulFem: HTMLElement;
    private lblPorcentajeDisfFemTallaS: HTMLElement;
    private btAgregarNiño: HTMLElement;
    private btAgregarAdulto: HTMLElement;

    constructor() {
        super({ formName: "mainForm" });
        this._vNiño = new Cl_vNiño();
        this._vAdulto = new Cl_vAdulto();
        this.dataDisfraz = this.crearHTMLElement({ elementName: "dataDisfraz" });
        this.lblTotalVendido = this.crearHTMLElement({ elementName: "lblTotalVendido", });
        this.lblCantAdulFem = this.crearHTMLElement({ elementName: "lblCantAdulFem", });
        this.lblPorcentajeDisfFemTallaS = this.crearHTMLElement({ elementName: "lblPorcentajeDisfFemTallaS",});

        this.btAgregarNiño = this.crearHTMLButtonElement({
            elementName: "btAgregarNiño",
            onclick: () => {
                this.show({ ver: false });
                this.vNiño.show();
            },
        });
        this.btAgregarAdulto = this.crearHTMLButtonElement({
            elementName: "btAgregarAdulto",
            onclick: () => {
                this.show({ ver: false });
                this.vAdulto.show();
            },
        });

        this.dataDisfraz.innerHTML = "";
        this.vNiño.show({ ver: false });
        this.vAdulto.show({ ver: false });
    }

    set controlador(controlador: Cl_controlador) {
        super.controlador = controlador;
        this.vNiño.controlador = controlador;
        this.vAdulto.controlador = controlador;
    }

    get vNiño() {
        return this._vNiño;
    }
    get vAdulto() {
        return this._vAdulto;
    }

    reportarDisfraz({
        dataDisfraz,
        totalVendido,
        cantAdulFem,
        porcentajeDisfFemTallaS,
    }: {
        dataDisfraz: iDisfraz;
        totalVendido: number;
        cantAdulFem: number
        porcentajeDisfFemTallaS: number;
    }): void {
        this.dataDisfraz.innerHTML += `
        <td class="colString">${dataDisfraz.codigo}</td>
        <td class="colString">${dataDisfraz.nombre}</td>
        <td class="colString">${dataDisfraz.talla}</td>
        <td class="colNumber">${dataDisfraz.precio}</td>
        <td class="colString">${dataDisfraz.accesorio ? dataDisfraz.accesorio : "--"}</td>
        <td class="colString">${dataDisfraz.sexo ? dataDisfraz.sexo : "--"}</td>
        <td class="colCurrency">${dataDisfraz.precioFinal.toFixed(2)}</td>
        
    `;
        this.lblTotalVendido.innerHTML = totalVendido.toFixed(2);
        this.lblCantAdulFem.innerHTML= cantAdulFem.toFixed(0);
        this.lblPorcentajeDisfFemTallaS.innerHTML = porcentajeDisfFemTallaS.toFixed(2);
    }

    show({ ver = true }: { ver?: boolean } = { ver: true }) {
        super.show({ ver });
        if (ver) {
            this.vNiño.show({ ver: false });
            this.vAdulto.show({ ver: false });
        }
    }
}
