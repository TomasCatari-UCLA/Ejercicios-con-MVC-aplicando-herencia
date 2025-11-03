interface iOperadores {
  id: number;
 nombre: string;
 sueldoBase: number;
 antiguedad:number;
 horaExtra: number;
}
interface iDirectivos {
  id: number;
 nombre: string;
 sueldoBase: number;
 antiguedad:number;
 nocturno: string;
}
let empleadoOperadores: iOperadores[], empleadoDirectivos: iDirectivos[];
empleadoOperadores = [
  { id: 11,nombre: "4x5 (agridulce)",sueldoBase: 20,antiguedad:20,horaExtra: 20 },
  { id: 77,nombre: "Gabriela",sueldoBase: 5000, antiguedad:9,horaExtra: 20 },
  { id: 55,nombre: "Alexna",sueldoBase: 800,antiguedad:7,horaExtra: 30 },
  { id: 88,nombre: "Andy",sueldoBase: 80000,antiguedad:19,horaExtra: 35 },
];
empleadoDirectivos = [
  { id: 33,nombre: "Veronica",sueldoBase: 1000,antiguedad:6,nocturno: 'No' },
  { id: 44,nombre: "Tomas",sueldoBase: 750,antiguedad:13,nocturno: 'Si' },
  { id: 77,nombre: "Willy",sueldoBase: 1500,antiguedad:7,nocturno: 'Si' },
  { id: 44,nombre: "Carlos",sueldoBase: 1000,antiguedad:10,nocturno: 'No' },
];
export { empleadoOperadores, empleadoDirectivos };
