//crear clase padre animal con los constructores
class Animal {
  constructor(name, age, images, comments) {
    this._name = name;
    this._age = age;
    this._images = images;
    this._comments = comments;
  }

  //gets nombre edad imagen comments y sonido y el SET comentarios
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  get images() {
    return this._images;
  }
  get comments() {
    return this._comments;
  }
  set comments(comments) {
    this._comments = comments;
  }
}

//exportar para poder utilizar
export default Animal;
