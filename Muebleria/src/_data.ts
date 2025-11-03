interface iComedor {
  factura: number;
 madera: number;
 sillas: number;
}
interface iMueble {
  factura: number;
 madera: number;
 tela: number;
}
let mobilarioComedor: iComedor[], mobilarioMueble: iMueble[];
mobilarioComedor = [
  { factura: 222,madera: 2, sillas: 3 },
  { factura: 111,madera: 1, sillas: 2 },
  { factura: 555,madera: 1, sillas: 4 },
  { factura: 888,madera: 2, sillas: 2 },
];
mobilarioMueble = [
  { factura: 444,madera: 1,tela: 3 },
  { factura: 333,madera: 1,tela: 1 },
  { factura: 777,madera: 2,tela: 2 },
  { factura: 445,madera: 1,tela: 2 },
];
export { mobilarioComedor, mobilarioMueble };
