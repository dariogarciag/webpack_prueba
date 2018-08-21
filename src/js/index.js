import '../scss/main.scss'

console.log('hola')

class Persona {
  constructor (name, age, genre) {
    this.name = name
    this.age = age
    this.genre = genre
  }

  saluda () {
    return `Hola ${this.name} tienes ${this.age} y eres ${this.genre}`
  }
}

const dario = new Persona('Dario', 29, 'Hombre')

console.log(dario.saluda())
