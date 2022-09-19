class Colegio{
    private nombreColegio
    private listaEstudiantes: Estudiante[];
    private listaProfes: Profesor[];
    private clase: number;
    
    constructor(auxNombreCole:string){

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

    constructor(auxClase:number, auxMates: number, auxLeng: number, auxSocia: number, auxNatu: number){
        this.clase = auxClase;
        this.notaMatematica = auxMates;
        this.notaLengua = auxLeng;
        this.notaSociales = auxSocia;
        this.notaNaturales = auxNatu;
        this.notaPromedio = (auxMates+auxLeng+auxSocia+ auxNatu)/4;
        this.matriculado = true;
        //¿Esta bien hacer esto? llamar funciones que este fuera de la clase? o deberia incluirlas dentro y entonces luego llamarlas?
        //o esta mal hacerlo del todo?
        this.nombreEstudiante = nombreRandom();
        this.apellidoEstudiante = apellidoRandom();
    }

    getNombreApellido(){
        console.log("Nombre: " + this.nombreEstudiante + " Apellido: "+this.apellidoEstudiante);
    }

    setNombre(auxNombre:string){
        this.nombreEstudiante=auxNombre;
    }

    setApellido(auxApellido:string){
        this.apellidoEstudiante=auxApellido;
    }

    getPromedio(){
        console.log(this.notaPromedio);
    }

    getAprobado(){
        if (this.notaPromedio<=7){
            console.log("Desaprobado");
        } else {
            console.log("Aprobado");
        } 
    }
    
    getClase(){
        console.log("El estudiante esta en la clase: "+this.clase);
    }

    setClase(){
        if(this.clase===0){
            this.clase=1;
        } else {
            this.clase=0;
        }
    }

    setMatricula(){  
        if(this.matriculado===true){
            this.matriculado=true;
        } else {
            this.matriculado=false;
        }
    }

    getMatricula(){
        if(this.matriculado===true){
            console.log("Esta matriculado");
        } else {
            console.log("No esta matriculado")
        }
        
    }
}

class Profesor{
    private nombreProfesor: string;
    private apellidoProfesor: string;
    private clase: number;
    private contratado: boolean;
    private listaEstudiantes: Estudiante[];

    constructor(auxClase: number){
        this.clase = auxClase;
        this.contratado = true;
        this.nombreProfesor = nombreRandom();
        this.apellidoProfesor = apellidoRandom();
    }
    
    setContratado(){
        if(this.contratado===true){
            this.contratado=false;
        } else {
            this.contratado=true;
        }
    }

    getContratado(){
        if(this.contratado===true){
            console.log("Esta contratado");;
        } else {
            console.log("No esta contratado");
        }
    }

    getClase(){
        console.log("El profesor esta en la clase: "+this.clase);
    }

    setClase(){
        if(this.clase===0){
            this.clase=1;
        } else {
            this.clase=0;
        }
    }



}

let cantEst : Estudiante [] = new Array(12);
let cantProf : Profesor [] = new Array(4);
const listaNombres : string [] = ["Jose","Pablo","Romeo","Paula","Camila","Agustina"];
const listaApellidos : string [] = ["Gutierrez","Canelo","Estani","Milliol","Otero","Capulleto"];

function cargarEstudiantes(lista){
    for(let i=0;i<lista.length;i++){
        let nroClase = i%2; 
        lista[i] = new Estudiante(nroClase,notaRandom(),notaRandom(),notaRandom(),notaRandom());
    }
}

function cargarProfes(lista){
    for(let i=0;i<lista.length;i++){
        let nroClase = i%2; 
        lista[i] = new Profesor(nroClase)
    }
}

function notaRandom():number {
    return Math.floor(Math.random() * (10 - 1 + 1) + 1);
}

function nombreRandom():string {
    let auxNum : number = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    return listaNombres[auxNum];
}

function apellidoRandom():string {
    let auxNum : number = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    return listaApellidos[auxNum];
}
