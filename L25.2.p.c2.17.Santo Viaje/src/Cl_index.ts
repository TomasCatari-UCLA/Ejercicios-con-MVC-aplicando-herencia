import Cl_mAgencia from "./Cl_mAgencia.js";
import Cl_Controlador from "./Cl_Controlador.js";
import Cl_vAgencia from "./Cl_vAgencia.js";
import Cl_mInternacional from "./Cl_mInternacional.js";
import Cl_mNacional from "./Cl_mNacional.js";
import { PaqueteInternacional, PaqueteNacional} from "./_data.js";
export default class Cl_index {
  private Controlador: Cl_Controlador;
  constructor() {
    let vista = new Cl_vAgencia();
    let modelo = new Cl_mAgencia();
    this.Controlador = new Cl_Controlador(modelo, vista);
    vista.Controlador = this.Controlador;
    this.iniciarData();
  }
  iniciarData() {
    this.Controlador.procesarPaqueteInternacional(new Cl_mInternacional(PaqueteInternacional[0]));
    this.Controlador.procesarPaqueteInternacional(new Cl_mInternacional(PaqueteInternacional[1]));
    this.Controlador.procesarPaqueteInternacional(new Cl_mInternacional(PaqueteInternacional[2]));
    this.Controlador.procesarPaqueteInternacional(new Cl_mInternacional(PaqueteInternacional[3]));

    this.Controlador.procesarPaqueteNacional(new Cl_mNacional(PaqueteNacional[0]));
    this.Controlador.procesarPaqueteNacional(new Cl_mNacional(PaqueteNacional[1]));
    this.Controlador.procesarPaqueteNacional(new Cl_mNacional(PaqueteNacional[2]) );
    this.Controlador.procesarPaqueteNacional(new Cl_mNacional(PaqueteNacional[3]) );
  }
}
