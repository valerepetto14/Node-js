const  user = {
    name: "valentin",
    lastname: "repetto",
    nombreCompleto() {
        return this.name+" "+this.lastname
    }
}
console.log(user.nombreCompleto())

cuenta = {
    pesos:200,
    depositar(){
        this.pesos += 100
    }
}

cuenta.depositar()
cuenta.depositar()
console.log(cuenta.pesos)