class MenuDijkstra {
    constructor(){
    }

    iniciarMenu(){
        const instGrafo = new Grafo()
        let cantNodos=prompt("Ingrese cantidad de nodos a crear:  ")
        for (let i = 0 ; i < cantNodos; i++){
            let iactual = i+1
            let nombre=prompt("Ingrese nombre nodo" + iactual + " ")
            instGrafo.crearNodo(nombre)
        }
        for (let i = 0 ; i < cantNodos; i++){
            let cantConexiones = prompt("Cuantas conexiones tiene el nodo" + instGrafo.misNodos[i].nombre+ "? :")
            for (let j = 0 ; j < cantConexiones; j++){
                let jactual = j+1
                let peso=prompt("Ingrese peso de la conexion: " + jactual + " ")
                //AGREGAR COMPROBACION DE ERRORES
                let nodoConexion=prompt("Ingrese nombre al que esta conectado: ")
                 instGrafo.agregarConexion(peso, instGrafo.misNodos[i].nombre, nodoConexion)
            }
        }




    }
}


class Grafo {
    constructor() {
        this.misNodos = []
    }

    crearNodo(nombre) {
        this.misNodos.push(new Nodo(nombre))
    }

    agregarConexion(peso, nombrenodo1, nombrenodo2) {
        let nodo1, nodo2
        for (let i = 0; i < this.misNodos.length; i++) {
            if (nombrenodo1 == this.misNodos[i].nombre) 
                nodo1 = this.misNodos[i]
            if (nombrenodo2 == this.misNodos[i].nombre) 
                nodo2 = this.misNodos[i]
        }
        nodo1.crearConexion(peso, nodo2)
        nodo2.crearConexion(peso, nodo1)

    }

    mostrarNodos() {
        console.log(this.misNodos)
    }

}
class Nodo {
    constructor(nombre) {
        this.nombre = nombre
        this.misConexiones = []
    }
    crearConexion(peso, nodo) {
        this.misConexiones.push(new Conexion(peso, nodo))
    }
}

class Conexion {
    constructor(peso, nodo) {
        this.peso = peso
        this.nodo = nodo
    }
}

const iniciarPrograma = () => {
    const inst=new MenuDijkstra()
    input("PROBANDOOOOOOOOOOOOOO")
    print("BIENVENIDDDDDDDDDDDDOS")
}

const print = (mensaje) => {
    const cuerpoHtml = document.getElementById("cuerpoHtml")
    const contenedorMensaje = document.createElement("div")
    const parrafoMensaje = document.createElement("p")

    parrafoMensaje.textContent = mensaje

    cuerpoHtml.appendChild(contenedorMensaje)
    contenedorMensaje.appendChild(parrafoMensaje)
}

const input = (mensaje) => {
    const cuerpoHtml = document.getElementById("cuerpoHtml")
    const contenedorMensaje = document.createElement("div")
    const parrafoMensaje = document.createElement("p")
    const contenedorTexto = document.createElement("input")

    parrafoMensaje.textContent = mensaje

    cuerpoHtml.appendChild(contenedorMensaje)
    contenedorMensaje.appendChild(parrafoMensaje)
    cuerpoHtml.appendChild(contenedorTexto)


}

const limpiarHtml = () => {
    const cuerpoHtml = document.getElementById("cuerpoHtml")
    cuerpoHtml.innerHTML = ""
    
}