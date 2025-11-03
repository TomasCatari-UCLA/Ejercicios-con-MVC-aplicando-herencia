interface iComerciante {
    cedula: string;
    nombre: string;
    edad: number;
    sexo: string;
    edoCivil: number;
}
let comerciantes: iComerciante[];
    comerciantes = [
        {cedula: "222", nombre: "Eva", edad: 25, sexo: "F", edoCivil: 2}
    ]
export { comerciantes };