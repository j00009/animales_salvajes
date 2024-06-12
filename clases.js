class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    getNombre() {
        return this._nombre;
    }

    getEdad() {
        return this._edad;
    }

    getImg() {
        return this._img;
    }

    setComentarios(comentarios) {
        this._comentarios = comentarios;
    }

    getSonido() {
        return this._sonido;
    }
}

class Leon extends Animal {
    rugir() {
        console.log("El león ruge: " + this.getSonido());
    }
}

class Lobo extends Animal {
    aullar() {
        console.log("El lobo aúlla: " + this.getSonido());
    }
}
class Oso extends Animal {
    gruñir() {
        console.log("El oso gruñe: " + this.getSonido());
    }
}


class Aguila extends Animal {
    chillar() {
        console.log("El águila chilla: " + this.getSonido());
    }
}


class Serpiente extends Animal {
    sisear() {
        console.log("La serpiente sisea: " + this.getSonido());
    }
}

export { Animal, Leon, Lobo, Oso, Aguila, Serpiente };