import Cl_vGeneral from "./Cl_vGeneral.js";

export default class Cl_vMobilario extends Cl_vGeneral {
    private inMadera: HTMLInputElement;
    private inFactura: HTMLInputElement;
    private tipId: HTMLElement;
    private btnCancelar: HTMLButtonElement;

    constructor() {
        super({formName: "mobilarioForm"});
        this.inMadera = this.crearHTMLInputElement({elementName:"inMadera"});
        this.inFactura = this.crearHTMLInputElement({elementName:"inFactura"});
        this.tipId = this.crearHTMLInputElement({elementName:"lblTipo"});
        this.btnCancelar = this.crearHTMLButtonElement({elementName:"btCancelar"
            ,onclick: () => {
                this.show({ ver: false });
                this.Controlador?.vista.show();
            },
                });
    }

    get madera():number{
        return +this.inMadera.value
    }

    get factura():number{
        return +this.inFactura.value
    }

    show({
        ver = true,
        nombreTipo = "",
    }:{
            ver?: boolean;
            nombreTipo?: string;
    }): void {
                super.show({ ver});
                this.tipId.innerHTML = nombreTipo;
                this.inMadera.value = "";
                this.inFactura.value = "";
                this.inMadera.focus();
            }
        }
    