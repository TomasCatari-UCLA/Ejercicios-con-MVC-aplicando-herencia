import Cl_mMuebleria from "./Cl_mMuebleria.js";
import Cl_Controlador from "./Cl_Controlador.js";
import Cl_vMuebleria from "./Cl_vMuebleria.js";
import Cl_mComedor from "./Cl_mComedor.js";
import Cl_mMueble from "./Cl_mMueble.js";
import { mobilarioComedor, mobilarioMueble } from "./_data.js";
export default class Cl_index {
    constructor() {
        let vista = new Cl_vMuebleria();
        let modelo = new Cl_mMuebleria();
        this.Controlador = new Cl_Controlador(modelo, vista);
        vista.Controlador = this.Controlador;
        this.iniciarData();
    }
    iniciarData() {
        this.Controlador.procesarMobilarioComedor(new Cl_mComedor(mobilarioComedor[0]));
        this.Controlador.procesarMobilarioComedor(new Cl_mComedor(mobilarioComedor[1]));
        this.Controlador.procesarMobilarioComedor(new Cl_mComedor(mobilarioComedor[2]));
        this.Controlador.procesarMobilarioComedor(new Cl_mComedor(mobilarioComedor[3]));
        this.Controlador.procesarMobilarioMueble(new Cl_mMueble(mobilarioMueble[0]));
        this.Controlador.procesarMobilarioMueble(new Cl_mMueble(mobilarioMueble[1]));
        this.Controlador.procesarMobilarioMueble(new Cl_mMueble(mobilarioMueble[2]));
        this.Controlador.procesarMobilarioMueble(new Cl_mMueble(mobilarioMueble[3]));
    }
}
