var Colegio = /** @class */ (function () {
    function Colegio(auxNombreCole, auxEstudiantes, auxProfes) {
        this.nombreColegio = auxNombreCole;
        this.listaEstudiantes = auxEstudiantes;
        this.listaProfes = auxProfes;
    }
    Colegio.prototype.getClase = function (auxClase) {
        for (var i = 0; i < this.listaEstudiantes.length; i++) {
            if (this.listaEstudiantes[i].getClase() === auxClase && this.listaEstudiantes[i].getMatricula() === "Matriculado") {
                console.log("Estudiante " + this.listaEstudiantes[i].getNombreApellido() + " pertenece a la clase " + auxClase);
            }
        }
        for (var i = 0; i < this.listaProfes.length; i++) {
            if (this.listaProfes[i].getClase() === auxClase && this.listaProfes[i].getContratado() === "Contratado") {
                console.log("Profesor " + this.listaProfes[i].getNombreApellido() + " pertenece a la clase " + auxClase);
            }
        }
    };
    Colegio.prototype.getListaEstudiantes = function () {
        for (var i = 0; i < this.listaEstudiantes.length; i++) {
            console.log("Estudiante " + this.listaEstudiantes[i].getNombreApellido());
        }
    };
    Colegio.prototype.getListaProfesores = function () {
        for (var i = 0; i < this.listaProfes.length; i++) {
            console.log("Profesor " + this.listaProfes[i].getNombreApellido());
        }
    };
    return Colegio;
}());
var Estudiante = /** @class */ (function () {
    function Estudiante(auxClase, auxMates, auxLeng, auxSocia, auxNatu) {
        this.clase = auxClase;
        this.notaMatematica = auxMates;
        this.notaLengua = auxLeng;
        this.notaSociales = auxSocia;
        this.notaNaturales = auxNatu;
        this.notaPromedio = (auxMates + auxLeng + auxSocia + auxNatu) / 4;
        this.matriculado = true;
        //Ya me dijo el profesor que no es del todo correcto hacer esto, pero fue la solucion que encontre en el momento.
        this.nombreEstudiante = nombreRandom();
        this.apellidoEstudiante = apellidoRandom();
    }
    Estudiante.prototype.getNombreApellido = function () {
        return (this.nombreEstudiante + " " + this.apellidoEstudiante);
    };
    Estudiante.prototype.setNombre = function (auxNombre) {
        this.nombreEstudiante = auxNombre;
    };
    Estudiante.prototype.setApellido = function (auxApellido) {
        this.apellidoEstudiante = auxApellido;
    };
    Estudiante.prototype.getPromedio = function () {
        console.log(this.notaPromedio);
    };
    Estudiante.prototype.getAprobado = function () {
        if (this.notaPromedio <= 7) {
            console.log("Desaprobado");
        }
        else {
            console.log("Aprobado");
        }
    };
    Estudiante.prototype.getClase = function () {
        return this.clase;
    };
    Estudiante.prototype.setClase = function () {
        if (this.clase === 0) {
            this.clase = 1;
        }
        else {
            this.clase = 0;
        }
    };
    Estudiante.prototype.setMatricula = function () {
        if (this.matriculado === true) {
            this.matriculado = true;
        }
        else {
            this.matriculado = false;
        }
    };
    Estudiante.prototype.getMatricula = function () {
        if (this.matriculado === true) {
            return ("Matriculado");
        }
        else {
            return ("No matriculado");
        }
    };
    return Estudiante;
}());
var Profesor = /** @class */ (function () {
    function Profesor(auxClase) {
        this.clase = auxClase;
        this.contratado = true;
        this.nombreProfesor = nombreRandom();
        this.apellidoProfesor = apellidoRandom();
        this.listaEstudiantes = this.formarListaProfesor(auxClase);
    }
    Profesor.prototype.getNombreApellido = function () {
        return (this.nombreProfesor + " " + this.apellidoProfesor);
    };
    Profesor.prototype.setContratado = function () {
        if (this.contratado === true) {
            this.contratado = false;
        }
        else {
            this.contratado = true;
        }
    };
    Profesor.prototype.getContratado = function () {
        if (this.contratado === true) {
            return ("Contratado");
        }
        else {
            return ("No contratado");
        }
    };
    Profesor.prototype.getClase = function () {
        return this.clase;
    };
    Profesor.prototype.setClase = function () {
        if (this.clase === 0) {
            this.clase = 1;
        }
        else {
            this.clase = 0;
        }
    };
    Profesor.prototype.formarListaProfesor = function (nroClase) {
        var auxContador = 0;
        var estudiantesAux = new Array();
        for (var i = 0; i < cantEst.length; i++) {
            if (cantEst[i].getClase() === nroClase && cantEst[i].getMatricula() === "Matriculado") {
                estudiantesAux[auxContador] = cantEst[i];
                auxContador++;
            }
        }
        return estudiantesAux;
    };
    //nose que nombre ponerle sin repetirme jaja
    Profesor.prototype.getMiLista = function () {
        for (var i = 0; i < this.listaEstudiantes.length; i++) {
            console.log("Estudiante " + this.listaEstudiantes[i].getNombreApellido() + " pertenece a la clase " + this.listaEstudiantes[i].getClase());
        }
    };
    return Profesor;
}());
var cantEst = new Array(12);
var cantProf = new Array(4);
var listaNombres = ["Jose", "Pablo", "Romeo", "Paula", "Camila", "Agustina"];
var listaApellidos = ["Gutierrez", "Canelo", "Estani", "Milliol", "Otero", "Capulleto"];
function cargarEstudiantes(lista) {
    for (var i = 0; i < lista.length; i++) {
        var nroClase = i % 2;
        lista[i] = new Estudiante(nroClase, notaRandom(), notaRandom(), notaRandom(), notaRandom());
    }
}
function cargarProfes(lista) {
    for (var i = 0; i < lista.length; i++) {
        var nroClase = i % 2;
        lista[i] = new Profesor(nroClase);
    }
}
function notaRandom() {
    return Math.floor(Math.random() * (10 - 1 + 1) + 1);
}
function nombreRandom() {
    var auxNum = Math.floor(Math.random() * (6 - 1 + 1));
    return listaNombres[auxNum];
}
function apellidoRandom() {
    var auxNum = Math.floor(Math.random() * (6 - 1 + 1));
    return listaApellidos[auxNum];
}
cargarEstudiantes(cantEst);
cargarProfes(cantProf);
var colegioUshuaia = new Colegio("Ushuaia chiquita", cantEst, cantProf);
colegioUshuaia.getListaEstudiantes();
colegioUshuaia.getListaProfesores();
console.log(cantEst[2]);
cantProf[1].getMiLista();
