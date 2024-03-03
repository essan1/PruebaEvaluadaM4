//aqui clases hijas, primero importar clase padre
import Animal from "./animal.js";

class Leon extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }
}

class Lobo extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }
}

class Oso extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }
}

class Serpiente extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }
}

class Aguila extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }
}

//exportar para usar
export { Leon, Lobo, Oso, Serpiente, Aguila };
