// esto es lo mismo que lo que venia haciendo, solo que esta forma resulta mas facil
// para personas que vienen de algun lenguaje como java ,.net , etc
class user {
    constructor(nombre, apellido) {
        this.name = nombre
        this.lastname = apellido
    }
    fullName(){
        return this.name+" "+this.lastname
    }
 }

const vale = new user("Valentin", "Repetto")
console.log(vale.name)
console.log(vale.fullName())