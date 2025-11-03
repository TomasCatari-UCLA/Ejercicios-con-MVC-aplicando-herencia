/**MANUFACTURA
 *En una empresa de manufactura se conoce de cada empleado su cedula, nombre y sueldo base mensual.
 *También se sabe que hay empleados operador y directivo. 
 *A los operadores se les asigna una prima de $5 por cantidad de horas extras trabajadas.
 *A los empleados directivos se les paga adicional un 20% del sueldo si es turno nocturno.
 *Se requiere un programa que determine: a) por empleado el sueldo mensual y
 * b) por la empresa: Monto total pagado a sus empleados, 
 * Monto adicional pagado a operadores y a Directivos.

 Operadores {id, nombre, sueldoBase, horaExtra}:
 * {11, Luis, 100, 10}
 * {77, Ray, 60, 20}
 * {55, Leo, 150, 25}
 * {88, Joe, 200, 15}
 * Directivos {id, nombre, sueldoBase, nocturno}:
 * {22, Ana, 100, No}
 * {44, Eva, 50, Si}
 * {33, Liz, 200, Si}
 * {88, Emy, 100, No}
 */
import Cl_mEmpresa from "./Cl_mEmpresa.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_vEmpresa from "./Cl_vEmpresa.js";
import Cl_mOperadores from "./Cl_mOperadores.js";
import Cl_mDirectivos from "./Cl_mDirectivos.js";
import { empleadoOperadores, empleadoDirectivos} from "./_data.js";
export default class Cl_index {
  private controlador: Cl_controlador;
  constructor() {
    let vista = new Cl_vEmpresa();
    let modelo = new Cl_mEmpresa();
    this.controlador = new Cl_controlador(modelo, vista);
    vista.controlador = this.controlador;
    this.iniciarData();
  }
  iniciarData() {
    this.controlador.procesarEmpleadoOperadores(new Cl_mOperadores(empleadoOperadores[0]));
    this.controlador.procesarEmpleadoOperadores(new Cl_mOperadores(empleadoOperadores[1]));
    this.controlador.procesarEmpleadoOperadores(new Cl_mOperadores(empleadoOperadores[2]));
    this.controlador.procesarEmpleadoOperadores(new Cl_mOperadores(empleadoOperadores[3]));

    this.controlador.procesarEmpleadoDirectivos(new Cl_mDirectivos(empleadoDirectivos[0]));
    this.controlador.procesarEmpleadoDirectivos(new Cl_mDirectivos(empleadoDirectivos[1]));
    this.controlador.procesarEmpleadoDirectivos(new Cl_mDirectivos(empleadoDirectivos[2]) );
     this.controlador.procesarEmpleadoDirectivos(new Cl_mDirectivos(empleadoDirectivos[3]) );
  }
}