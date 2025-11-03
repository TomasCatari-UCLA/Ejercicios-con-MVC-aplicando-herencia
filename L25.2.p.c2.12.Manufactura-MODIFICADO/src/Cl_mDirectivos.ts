import Cl_mEmpleado from "./Cl_mEmpleado.js"; 
export default class Cl_mDirectivos extends Cl_mEmpleado { 
  private _nocturno: string = ""; 
  constructor({ id, nombre, sueldoBase,antiguedad, nocturno }: 
    { id: number;
       nombre: string;
        sueldoBase: number; 
        antiguedad:number;
        nocturno: string; 
      })
         { super({ id, nombre, sueldoBase,antiguedad}); 
         this.nocturno = nocturno;
         } 
         set nocturno(nocturno: string) 
         { this._nocturno = nocturno; 

         } get nocturno(): string { 
          return this._nocturno; 
        } 
        // COMENTARIO PARA QUE WILLY NO LE DE ANSIEDAD
        VerificacionNocturno(): boolean { 
          if(this.nocturno === "Si"){ 
          return true
        }
        else return false
        } 

        adicional(): number{
        if (this.VerificacionNocturno()){
         return this.sueldoBase * 0.20;  
        }
        else return 0
        }

        sueldoMensual(): number { 
          return this.adicional() + this.sueldoBase +this.bonoAntiguedad();
        } 

          //if(this.VerificacionNocturno()) = if(this.VerificacionNocturno()===true)
        bonoAntiguedad(): number {
          if(this.VerificacionNocturno()){
            return 2*(10*this.antiguedad);
          }
          else return 10*this.antiguedad;
          }
        toJSON() { 
          return {
             ...super.toJSON(), 
             nocturno: this.nocturno, 
            }; 
          } 
        }