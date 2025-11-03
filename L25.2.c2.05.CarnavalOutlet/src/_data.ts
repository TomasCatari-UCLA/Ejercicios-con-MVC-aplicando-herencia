interface iNiño {
  codigo: string;
  nombre: string;
  talla: string;
  precio: number;
  accesorio: string;
}
interface iAdulto {
 codigo: string;
  nombre: string;
  talla: string;
  precio: number;
  sexo: string;
}
let niños: iNiño[], adultos: iAdulto[];
 niños = [
    {codigo: "22", nombre: "Batman", talla: "10", precio: 20, accesorio: "si"},
    {codigo: "11", nombre: "Gato", talla: "5", precio: 10, accesorio: "no"},
    {codigo: "55", nombre: "Vaquero", talla: "12", precio: 40, accesorio: "si"},
    {codigo: "88", nombre: "Principe", talla: "8", precio: 25, accesorio: "no"}
];
 adultos = [
    {codigo: "44", nombre: "Leon", talla: "S", precio: 40, sexo: "F"},
    {codigo: "33", nombre: "Rey", talla: "S", precio: 50, sexo: "M"},
    {codigo: "77", nombre: "Bombero", talla: "M", precio: 30, sexo: "F"},
    {codigo: "66", nombre: "Astronauta", talla: "S", precio: 25, sexo: "F"},
];
export {niños, adultos};