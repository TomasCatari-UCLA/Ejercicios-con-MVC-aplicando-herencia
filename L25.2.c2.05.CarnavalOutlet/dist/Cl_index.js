/*La Tienda Outlet C.A, ofrece para esta temporada de carnaval, los mejores disfraces
 para adultos y niños. Se conoce cada disfraz su código, nombre, 
 talla (0...16->niños y S,M,L->adultos) y precio. Además se sabe que si el disfraz 
 es para adulto femenino el disfraz tendrá un descuento del 20% sobre el precio y si 
 es adulto masculino tendrá un incremento del 10%. Por otro lado, si el disfraz es de
  niño se debe tomar en cuenta si el disfraz lleva sombrero o antifaz 
  (cualquiera de los dos), de ser así este tendrá un descuento del 25% sobre el precio.
   La Tienda requiere determinar al final de su jornada laboral: el precio final 
   de cada disfraz, el total vendido y el porcentaje de disfraces de adulto 
   femenino de talla S vendidos. */
   import Cl_mTienda from "./Cl_mTienda.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vCarnaval from "./Cl_vCarnaval.js";
import Cl_mNiño from "./Cl_mNiño.js";
import Cl_mAdulto from "./Cl_mAdulto.js";
import { niños, adultos } from "./_data.js";

export default class Cl_index {

  constructor() {
    // 1. Instanciar la Vista Principal
    let vista = new Cl_vCarnaval();
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
    this.controlador.procesarNiño(new Cl_mNiño (niños[0]));
    this.controlador.procesarNiño(new Cl_mNiño (niños[1]));
    this.controlador.procesarNiño(new Cl_mNiño(niños[2]));
    this.controlador.procesarNiño(new Cl_mNiño (niños[3]));
    this.controlador.procesarAdulto(new Cl_mAdulto(adultos[0]));
    this.controlador.procesarAdulto(new Cl_mAdulto(adultos[1]));
    this.controlador.procesarAdulto(new Cl_mAdulto(adultos[2]));
    this.controlador.procesarAdulto(new Cl_mAdulto(adultos[3]));
  }
}