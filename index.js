import { Animal, Leon, Lobo, Oso, Aguila, Serpiente } from './animales.js';
function agregarAnimalALista(animal) {
    const animalesDiv = document.getElementById('Animales');
    const animalDiv = document.createElement('div');
    animalDiv.className = 'animal-card bg-light text-dark m-2 p-2';
    animalDiv.innerHTML = `
        <h5>${animal.getNombre()}</h5>
        <p>Edad: ${animal.getEdad()}</p>
        <p>Comentarios: ${animal.comentarios}</p>
        <img src="assets/imgs/${animal.getImg()}" alt="${animal.getNombre()}" class="img-fluid">
        <audio controls class="mt-2">
            <source src="assets/sounds/${animal.getSonido()}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    `;
    animalesDiv.appendChild(animalDiv);
}
document.getElementById('animal').addEventListener('change', function() {
    const animalSeleccionado = this.value;
    const previewDiv = document.getElementById('preview');
    
    let imgPath;

    switch(animalSeleccionado) {
        case 'Leon':
            imgPath = 'Leon.png';
            break;
        case 'Lobo':
            imgPath = 'Lobo.png';
            break;
        case 'Oso':
            imgPath = 'Oso.png';
            break;
        case 'Serpiente':
            imgPath = 'Serpiente.png';
            break;
        case 'Aguila':
            imgPath = 'Aguila.png';
            break;
        default:
            imgPath = '';
    }

    if (imgPath) {
        previewDiv.innerHTML = `<img src="assets/imgs/${imgPath}" alt="${animalSeleccionado}" class="img-fluid">`;
    } else {
        previewDiv.innerHTML = '';
    }
});

function crearAnimal() {
    const tipo = document.getElementById('animal').value;
    const edad = document.getElementById('edad').value;
    const comentarios = document.getElementById('comentarios').value;
    const img = `${tipo.toLowerCase()}.png`;
    const sonido = `${tipo.toLowerCase()}.mp3`;

    let animal;

    switch (tipo) {
        case 'Leon':
            animal = new Leon(tipo, edad, img, comentarios, sonido);
            animal.rugir();
            break;
        case 'Lobo':
            animal = new Lobo(tipo, edad, img, comentarios, sonido);
            animal.aullar();
            break;
        case 'Oso':
            animal = new Oso(tipo, edad, img, comentarios, sonido);
            animal.gruñir();
            break;
        case 'Aguila':
            animal = new Aguila(tipo, edad, img, comentarios, sonido);
            animal.chillar();
            break;
        case 'Serpiente':
            animal = new Serpiente(tipo, edad, img, comentarios, sonido);
            animal.sisear();
            break;
        default:
            console.log("Tipo de animal no válido");
    }


    agregarAnimalALista(animal);
}



