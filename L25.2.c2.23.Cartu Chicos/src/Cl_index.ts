/*La Tienda Outlet C.A, ofrece para esta temporada de carnaval, los mejores disfraces
 para Laser y Tinta. Se conoce cada disfraz su código, nombre, 
 talla (0...16->Tinta y S,M,L->Laser) y precio. Además se sabe que si el disfraz 
 es para Laser femenino el disfraz tendrá un descuento del 20% sobre el precio y si 
 es Laser masculino tendrá un incremento del 10%. Por otro lado, si el disfraz es de
  Tinta se debe tomar en cuenta si el disfraz lleva sombrero o antifaz 
  (cualquiera de los dos), de ser así este tendrá un descuento del 25% sobre el precio.
   La Tienda requiere determinar al final de su jornada laboral: el precio final 
   de cada disfraz, el total vendido y el porcentaje de disfraces de Laser 
   femenino de talla S vendidos. */
   import Cl_mTienda from "./Cl_mTienda.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vTienda  from "./Cl_vTienda.js";
import Cl_mTinta from "./Cl_mTinta.js";
import Cl_mLaser from "./Cl_mLaser.js";
import { Tinta, Laser } from "./_data.js";

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
    this.controlador.procesarTinta(new Cl_mTinta(Tinta[0]));
    this.controlador.procesarTinta(new Cl_mTinta(Tinta[1]));
    this.controlador.procesarTinta(new Cl_mTinta(Tinta[2]));
    this.controlador.procesarTinta(new Cl_mTinta(Tinta[3]));
    this.controlador.procesarLaser(new Cl_mLaser(Laser[0]));
    this.controlador.procesarLaser(new Cl_mLaser(Laser[1]));
    this.controlador.procesarLaser(new Cl_mLaser(Laser[2]));
    this.controlador.procesarLaser(new Cl_mLaser(Laser[3]));
  }
}