interface iFotografia {
    tipoF: string;
    codigo: string;
    costo: number;
    esUrgente:boolean;
}
interface iVideo {
    hD: string;
    codigo: string;
    costo: number;
    esUrgente:boolean;
}
let fotografia: iFotografia[], video: iVideo[];
 fotografia = [
     {codigo: "22", costo: 20, tipoF: "I", esUrgente: false},
     {codigo: "11", costo: 10, tipoF: "D", esUrgente:true},
     {codigo: "55", costo: 30, tipoF: "I",esUrgente:false},
     {codigo: "88", costo: 20, tipoF: "D",esUrgente:false},
];
 video = [
    {codigo: "44", costo: 100, hD: "Si", esUrgente: false},
    {codigo: "33", costo: 200, hD: "Si",esUrgente:true},
    {codigo: "77", costo: 250, hD: "No",esUrgente:false},
    {codigo: "66", costo: 300, hD: "Si", esUrgente:false},
];
export { fotografia, video };