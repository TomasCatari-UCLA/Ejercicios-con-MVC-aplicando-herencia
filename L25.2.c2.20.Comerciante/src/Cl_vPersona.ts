import Cl_controlador from "./Cl_controlador.js";
import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vPersona extends Cl_vGeneral {
    private inCedula: HTMLInputElement;
    private inNombre: HTMLInputElement;
    private inEdad: HTMLInputElement
    private inSexo: HTMLInputElement;
    private inEdoCivil: HTMLInputElement;
    private lblTipo: HTMLElement;
    private btCancelar: HTMLButtonElement;
    
    constructor(){
        super({ formName: "comercianteForm" });
        this.lblTipo = this.crearHTMLElement({ elementName: "lblTipo" });
        this.inCedula = this.crearHTMLInputElement({ elementName: "inCedula" });
        this.inNombre = this.crearHTMLInputElement({ elementName: "inNombre" });
        this.inEdad = this.crearHTMLInputElement({ elementName: "inEdad" });
        this.inSexo = this.crearHTMLInputElement({ elementName: "inSexo" });
        this.inEdoCivil = this.crearHTMLInputElement({ elementName: "inEdoCivil" });
        this.btCancelar = this.crearHTMLButtonElement({ elementName: "btCancelar",
            onclick: () => {
                this.show({ ver: false });
                this.controlador?.vista.show();
            }
         });
    }
    get cedula(): string {
        return this.inCedula.value;
    }
    get nombre(): string {
        return this.inNombre.value;
    }
    get edad(): number {
        return +this.inEdad.value;
    }
    get sexo(): string {
        return this.inSexo.value;
    }
    get edoCivil(): number {
        return +this.inEdoCivil.value;
    }
    show({
        ver = true,
        nombreTipo = "",
    }:{
        ver?: boolean;
        nombreTipo?: string;
    }): void {
        super.show({ ver });
        this.lblTipo.innerHTML = nombreTipo;
        this.inCedula.value = "";
        this.inNombre.value = "";
        this.inEdad.value = "";
        this.inSexo.value = "";
        this.inEdoCivil.value = "";
        this.inCedula.focus();
    }
}