//importar los tipos de animales
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./mod/animaltype.js";

//importar fx autoejecutable
import infoAnimales from "./mod/Animales.js";

//traer los elementos del html
const animalSelect = document.getElementById("animal");
const edadSelect = document.getElementById("edad");
const comentarios = document.getElementById("comentarios");
const preview = document.getElementById("preview");
const botonRegistro = document.getElementById("btnRegistrar");
const cardAnimales = document.getElementById("Animales");

let selectedImage;

//event img preview..
animalSelect.addEventListener("change", async () => {
  const animal = animalSelect.value;
  const animales = await infoAnimales.getData();
  const dataAnimal = animales.find((a) => a.name === animal);
  selectedImage = `assets/imgs/${dataAnimal.imagen}`;
  preview.style.backgroundImage = `url(${selectedImage})`;
});

// Evento para agregar animales..
botonRegistro.addEventListener("click", () => {
  const name = animalSelect.value;
  const age = edadSelect.value;
  const comments = comentarios.value;


  if (name && age && comments) {
    let animal;
    const images = selectedImage;

    if (name == "Leon") {
      animal = new Leon(name, age, images, comments);
    } else if (name == "Lobo") {
      animal = new Lobo(name, age, images, comments);
    } else if (name == "Oso") {
      animal = new Oso(name, age, images, comments);
    } else if (name == "Serpiente") {
      animal = new Serpiente(name, age, images, comments);
    } else {
      animal = new Aguila(name, age, images, comments);
    }

    cardAnimales.appendChild(createAnimalCard(animal));
    // limpiar form
    resetForm();
  } else {
    alert("Por favor rellene todos los campos");
  }
});

// Función para crear la tarjeta de animal
function createAnimalCard(animal) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("px-3", "pb-2");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("bg-dark", "text-white");

  const animalImg = document.createElement("img");
  animalImg.height = "200";
  animalImg.width = "200";
  animalImg.src = selectedImage;

  contentDiv.appendChild(animalImg);
  cardDiv.appendChild(contentDiv);

  return cardDiv;
}

// fx para limpiar form
function resetForm() {
  animalSelect.value = "";
  edadSelect.value = "";
  comentarios.value = "";
  preview.style.backgroundImage = "";
}
