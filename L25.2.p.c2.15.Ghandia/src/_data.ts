interface iOperadores {
  id: number;
 nombre: string;
 sueldoBase: number;
 horaExtra: number;
}
interface iDirectivos {
  id: number;
 nombre: string;
 sueldoBase: number;
 nocturno: string;
}
let empleadoOperadores: iOperadores[], empleadoDirectivos: iDirectivos[];
empleadoOperadores = [
  { id: 11,nombre: "Luis",sueldoBase: 100,horaExtra: 10 },
  { id: 77,nombre: "Ray",sueldoBase: 60, horaExtra: 20 },
  { id: 55,nombre: "Leo",sueldoBase: 150,horaExtra: 25 },
  { id: 88,nombre: "Joe",sueldoBase: 200,horaExtra: 15 },
];
empleadoDirectivos = [
  { id: 33,nombre: "Ana",sueldoBase: 100,nocturno: 'No' },
  { id: 44,nombre: "Eva",sueldoBase: 50,nocturno: 'Si' },
  { id: 77,nombre: "Liz",sueldoBase: 200,nocturno: 'Si' },
  { id: 44,nombre: "Emy",sueldoBase: 100,nocturno: 'No' },
];
export { empleadoOperadores, empleadoDirectivos };
