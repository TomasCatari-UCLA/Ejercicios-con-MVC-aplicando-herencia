import Cl_mTienda from "./Cl_mTienda.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vTienda from "./Cl_vTienda.js";
import Cl_mFotografia from "./Cl_mFotografia.js";
import Cl_mVideo from "./Cl_mVideo.js";
import { fotografia, video } from "./_data.js";

export default class Cl_index {
  private controlador: Cl_controlador;

  constructor() {
    // 1. Instanciar la Vista Principal
    let vista = new Cl_vTienda();
    // 2. Instanciar el Modelo Principal (Procesador)
    let modelo = new Cl_mTienda();
    // 3. Instanciar el Controlador, pasándole el Modelo y la Vista
    this.controlador = new Cl_controlador(modelo, vista);
    // 4. Asignar el controlador a la vista para la comunicación
    vista.controlador = this.controlador;

    // Cargar los datos de prueba iniciales
    this.iniciarData();
  }
  iniciarData() {
    this.controlador.procesarFotografia(new Cl_mFotografia (fotografia[0]));
    this.controlador.procesarFotografia(new Cl_mFotografia (fotografia[1]));
    this.controlador.procesarFotografia(new Cl_mFotografia(fotografia[2]));
    this.controlador.procesarFotografia(new Cl_mFotografia (fotografia[3]));
    this.controlador.procesarVideo(new Cl_mVideo(video[0]));
    this.controlador.procesarVideo(new Cl_mVideo(video[1]));
    this.controlador.procesarVideo(new Cl_mVideo(video[2]));
    this.controlador.procesarVideo(new Cl_mVideo(video[3]));
  }
}