interface iInternacional {
  Codigo: number;
  Costo: number;
}
interface iNacional {
  Codigo: number;
  Costo: number;
  Destino:number;
}
let PaqueteInternacional: iInternacional[], PaqueteNacional: iNacional[];
PaqueteInternacional = [
  { Codigo: 44, Costo: 1000  },
  { Codigo: 33, Costo: 500   },
  { Codigo: 77, Costo: 2000  },
  { Codigo: 44, Costo: 1500  },
];
PaqueteNacional = [
  { Codigo: 22, Costo: 100, Destino:2 },
  { Codigo: 11, Costo: 50,  Destino:1 },
  { Codigo: 55, Costo: 150, Destino:1 },
  { Codigo: 88, Costo: 200, Destino:2 },
];
export { PaqueteInternacional,PaqueteNacional };
