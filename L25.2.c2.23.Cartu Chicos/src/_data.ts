interface iTinta {id: number;tipoTinta: number;}
 interface iLaser {id: number;cantToner: number;
}
let Tinta: iTinta[], Laser: iLaser[];
 Tinta = [
    {id: 22,tipoTinta: 2},
    {id: 11,tipoTinta: 1},
    {id: 55,tipoTinta: 1},
    {id: 88,tipoTinta: 2}
];
 Laser = [
    {id:44, cantToner: 2},
    {id:33, cantToner: 3},
    {id:77, cantToner: 1},
    {id:66, cantToner: 3},
]
export {Tinta, Laser};