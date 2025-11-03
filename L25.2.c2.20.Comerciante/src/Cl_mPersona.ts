export default class Cl_mPersona {
    public _cedula: string = "";
    public _nombre: string = "";
    public _edad: number = 0;
    public _sexo: string = "";
    public _edoCivil: number = 0;

    constructor({cedula, nombre, edad, sexo, edoCivil} :{
        cedula: string;
        nombre: string;
        edad: number;
        sexo: string;
        edoCivil: number;
    }){
        this.cedula = cedula;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.edoCivil = edoCivil;
    }
    set cedula(cedula: string){
        this._cedula = cedula;
    }
    get cedula(): string{
        return this._cedula;
    }
    set nombre(nombre: string){
        this._nombre = nombre;
    }
    get nombre(): string{
        return this._nombre;
    }
    set edad(edad: number){
        this._edad = edad;
    }
    get edad(): number{
        return this._edad;
    }
    set sexo(sexo: string){
        this._sexo = sexo;
    }
    get sexo(): string{
        return this._sexo;
    }
    set edoCivil(edoCivil: number){
        this._edoCivil = edoCivil;
    }
    get edoCivil(): number{
        return this._edoCivil;
    }
    porcAprobado(): number {
        return 0;
    }
    toJSON(){
        return {
            cedula: this.cedula,
            nombre: this.nombre,
            edad: this.edad,
            sexo: this.sexo,
            edoCivil: this.edoCivil,
            porcAprobado: this.porcAprobado(),
        };
    }
}