export class User{
    _id?: number;
    nombre: string;
    email: string;
    puesto: string;
    fnac: string;
    domicilio: string;
    habilidad: string;
    grade: number;

    constructor(nombre: string, email: string, puesto:string, fnac:string, domicilio:string, habilidad:string, grade:number){
        this.nombre = nombre;
        this.email = email;
        this.puesto = puesto;
        this.fnac = fnac;
        this.domicilio = domicilio;
        this.habilidad = habilidad;
        this.grade = grade;
    }

}

