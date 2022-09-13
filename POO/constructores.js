function user(name, lastname){
    this.name = name
    this.lastname = lastname,
    this.fullname = () => this.name+" "+this.lastname
}

vale = new user("valentin", "repetto")
console.log(vale.fullname())
console.log(vale.constructor)