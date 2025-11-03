import Cl_vMobilario from "./Cl_vMobilario.js";
interface iMueble {
    madera:number,
    factura:number,
    tela:number
}

export default class Cl_vMueble extends Cl_vMobilario {
    private inTela: HTMLInputElement;
    private divTela: HTMLElement;
    private btnAceptar: HTMLButtonElement;

    constructor() {
        super()
        this.inTela = this.crearHTMLInputElement({ elementName: "inTela"});
        this.divTela = this.crearHTMLInputElement({ elementName: "divTela"});
        this.btnAceptar = this.crearHTMLButtonElement({ 
            elementName: "btnAceptarMueble",
         onclick: () => this.Controlador?.procesarMobilarioMueble({
        madera: this.madera,
        factura: this.factura,
        tela: this.tela,
      }),
    });
    }

    get tela(): number {
        return +this.inTela.value;
    }
      show({ ver = true }: { ver?: boolean } = { ver: true }) {
    super.show({ ver, nombreTipo: "Mueble" });
    this.inTela.value = "";
    this.divTela.hidden = ver === false;
    this.btnAceptar.hidden = ver === false;

}
}

export { iMueble }