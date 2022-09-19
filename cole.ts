class Colegio{
    private listaEstudiantes: Estudiante[];
    private listaProfes: Profesor[];
    private clase: number;
    private contratado: boolean;



}

class Estudiante {
    private nombre: string;
    private clase: number;
    private nota: number;

    constructor(auxClase:number, auxNota: number){
        this.clase = auxClase;
        this.nota = auxNota;
        this.nombre = "EL Falton"
    }

}

class Profesor{
    private nombre: string;
    private clase: number;
}

let cantEst = new Array(11) ;

function cargarEstudiantes(lista){
    for(let i=0;i<lista.length;i++){
        let nroClase = i%2; 
        let nota = Math.floor(Math.random() * (10 - 1 + 1) + 1)
        lista[i] = new Estudiante(nroClase,nota);
        lista[i].cargaDatos();
    }
    
}