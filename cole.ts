class Colegio {
    private nombreColegio : string;
    private listaEstudiantes: Estudiante[];
    private listaProfes: Profesor[];
    
    constructor(auxNombreCole: string, auxEstudiantes: Estudiante[],auxProfes: Profesor[]){
        this.nombreColegio=auxNombreCole;
        this.listaEstudiantes=auxEstudiantes;
        this.listaProfes=auxProfes;
    }

    public getClase(auxClase: number): void {
        for (let i=0; i<this.listaEstudiantes.length; i++) {
            if (this.listaEstudiantes[i].getClase() === auxClase && this.listaEstudiantes[i].getMatricula() === "Matriculado") {
                console.log ("Estudiante " + this.listaEstudiantes[i].getNombreApellido() + " pertenece a la clase " + auxClase);
            }
        }

        for (let i=0; i<this.listaProfes.length; i++) {
            if(this.listaProfes[i].getClase() === auxClase && this.listaProfes[i].getContratado() === "Contratado") {
                console.log ("Profesor "+ this.listaProfes[i].getNombreApellido() + " pertenece a la clase " + auxClase);
            } 
        }

    }

    public getListaEstudiantes(): void {
        for (let i=0; i<this.listaEstudiantes.length; i++) {
            console.log ("Estudiante " + this.listaEstudiantes[i].getNombreApellido());
        }
    }

    
    public getListaProfesores(): void {
        for (let i=0; i<this.listaProfes.length; i++) {
            console.log ("Profesor " + this.listaProfes[i].getNombreApellido());
        }
    }

}

class Estudiante {
    private nombreEstudiante: string;
    private apellidoEstudiante: string;
    private clase: number;
    private notaPromedio: number;
    private notaMatematica: number;
    private notaLengua: number;
    private notaSociales: number;
    private notaNaturales: number;
    private matriculado: boolean;

    constructor (auxClase: number, auxMates: number, auxLeng: number, auxSocia: number, auxNatu: number) {
        this.clase = auxClase;
        this.notaMatematica = auxMates;
        this.notaLengua = auxLeng;
        this.notaSociales = auxSocia;
        this.notaNaturales = auxNatu;
        this.notaPromedio = (auxMates + auxLeng + auxSocia + auxNatu) /4;
        this.matriculado = true;
        //Ya me dijo el profesor que no es del todo correcto hacer esto, pero fue la solucion que encontre en el momento.
        this.nombreEstudiante = nombreRandom();
        this.apellidoEstudiante = apellidoRandom();
    }

    public getNombreApellido(): string {
        return (this.nombreEstudiante + " " +this.apellidoEstudiante);
    }

    public setNombre(auxNombre:string): void {
        this.nombreEstudiante = auxNombre;
    }

    public setApellido(auxApellido: string): void {
        this.apellidoEstudiante = auxApellido;
    }

    public getPromedio(): void {
        console.log (this.notaPromedio);
    }

    public getAprobado(): void {
        if (this.notaPromedio <= 7) {
            console.log ("Desaprobado");
        } else {
            console.log ("Aprobado");
        } 
    }
    
    public getClase(): number {
        return this.clase;
    }

    public setClase(): void {
        if(this.clase === 0){
            this.clase = 1;
        } else {
            this.clase = 0;
        }
    }

    public setMatricula(): void {   
        if (this.matriculado === true) {
            this.matriculado = true;
        } else {
            this.matriculado = false;
        }
    }

    public getMatricula(): string {
        if (this.matriculado === true) {
            return ("Matriculado");
        } else {
            return ("No matriculado");
        }
        
    }
}

class Profesor {
    private nombreProfesor: string;
    private apellidoProfesor: string;
    private clase: number;
    private contratado: boolean;
    private listaEstudiantes: Estudiante[];

    constructor (auxClase: number ){
        this.clase = auxClase;
        this.contratado = true;
        this.nombreProfesor = nombreRandom();
        this.apellidoProfesor = apellidoRandom();
        this.listaEstudiantes = this.formarListaProfesor(auxClase);
    }

    public getNombreApellido(): string {
        return (this.nombreProfesor + " " + this.apellidoProfesor);
    }
    
    public setContratado(): void {
        if (this.contratado === true) {
            this.contratado = false;
        } else {
            this.contratado = true;
        }
    }

    public getContratado(): string {
        if (this.contratado === true) {
            return ("Contratado");
        } else {
            return ("No contratado");
        }
    }

    public getClase():number {
        return this.clase;
    }

    public setClase(): void {
        if(this.clase===0){
            this.clase=1;
        } else {
            this.clase=0;
        }
    }

    private formarListaProfesor(nroClase:number): Estudiante[] {
        let auxContador: number = 0;
        let estudiantesAux: Estudiante[] = new Array();
        for (let i=0; i < cantEst.length; i++) {
            if (cantEst[i].getClase() === nroClase && cantEst[i].getMatricula() === "Matriculado" ) {
                estudiantesAux[auxContador] = cantEst[i];
                auxContador++;
            }
        }
        return estudiantesAux;
    }

    //nose que nombre ponerle sin repetirme jaja
    public getMiLista(): void {
        for (let i=0; i < this.listaEstudiantes.length; i++) {
            console.log ("Estudiante " + this.listaEstudiantes[i].getNombreApellido()); // " pertenece a la clase " + this.listaEstudiantes[i].getClase());
        }
    }



}

let cantEst : Estudiante [] = new Array(12);
let cantProf : Profesor [] = new Array(4);
const listaNombres : string [] = ["Jose", "Pablo", "Romeo", "Paula", "Camila", "Agustina"];
const listaApellidos : string [] = ["Gutierrez", "Canelo", "Estani", "Milliol", "Otero", "Capulleto"];

function cargarEstudiantes(lista): void {
    for (let i = 0; i < lista.length; i++) {
        let nroClase = i%2; 
        lista[i] = new Estudiante(nroClase, notaRandom(), notaRandom(), notaRandom(), notaRandom());
    }
}

function cargarProfes(lista): void {
    for (let i=0; i < lista.length; i++) {
        let nroClase = i%2; 
        lista[i] = new Profesor(nroClase);
    }
}

function notaRandom(): number {
    return Math.floor(Math.random() * (10 - 1 + 1) + 1);
}

function nombreRandom(): string {
    let auxNum : number = Math.floor(Math.random() * (6 - 1 + 1));
    return listaNombres[auxNum];
}

function apellidoRandom(): string {
    let auxNum : number = Math.floor(Math.random() * (6 - 1 + 1));
    return listaApellidos[auxNum];
}

cargarEstudiantes(cantEst);
cargarProfes(cantProf);
let colegioUshuaia : Colegio = new Colegio("Ushuaia chiquita", cantEst, cantProf);
colegioUshuaia.getClase(0);
colegioUshuaia.getListaEstudiantes();
colegioUshuaia.getListaProfesores();
console.log(cantEst[2]);
cantProf[1].getMiLista();