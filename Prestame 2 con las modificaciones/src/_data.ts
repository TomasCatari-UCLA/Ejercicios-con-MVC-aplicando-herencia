interface iVivienda {
  cedula: string;
  estadoCivil: string;
  montoPrestamo: number;
}
interface iVehiculo {
  cedula: string;
  estadoCivil: string;
  modelo:string;
}
let prestamoVivienda: iVivienda[], prestamoVehiculo: iVehiculo[];
prestamoVivienda = [
  { cedula: "222", estadoCivil: "C" , montoPrestamo: 1000, },
  { cedula: "888", estadoCivil: "S", montoPrestamo: 500, },
  { cedula: "111", estadoCivil: "C" , montoPrestamo: 2000, },
  { cedula: "333", estadoCivil: "D", montoPrestamo: 3000, },
];
prestamoVehiculo = [
  { cedula: "555", estadoCivil: "S", modelo: "U"},
  { cedula: "777", estadoCivil: "C", modelo: "V"},
  { cedula: "999", estadoCivil: "C", modelo: "U"},
  { cedula: "444", estadoCivil: "D", modelo: "U"},
];
export { prestamoVivienda,prestamoVehiculo };
