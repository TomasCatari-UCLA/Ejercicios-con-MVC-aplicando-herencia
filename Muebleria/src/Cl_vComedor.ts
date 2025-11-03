import Cl_vMobilario from "./Cl_vMobilario.js";
interface iComedor {
    madera:number,
    factura:number,
    sillas:number
}

export default class Cl_vComedor extends Cl_vMobilario {
    private inSillas: HTMLInputElement;
    private divSillas: HTMLElement;
    private btnAceptar: HTMLButtonElement;


    constructor() {
        super()
        this.inSillas = this.crearHTMLInputElement({ elementName: "inSillas"});
        this.divSillas = this.crearHTMLInputElement({ elementName: "divSillas"});
        this.btnAceptar = this.crearHTMLButtonElement({ 
            elementName: "btnAceptarComedor",
         onclick: () => this.Controlador?.procesarMobilarioComedor({
        madera: this.madera,
        factura: this.factura,
        sillas: this.sillas,
      }),
    });
    }

    get sillas(): number {
        return +this.inSillas.value;
    }
      show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Mueble" });
    this.inSillas.value = "";
    this.divSillas.hidden = ver === false;
    this.btnAceptar.hidden = ver === false;

}
}

export { iComedor }