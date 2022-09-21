const json = {"name": "valentin","apellido": "repetto"}


console.log("serealizar")
const obj_txt = JSON.stringify(json)
console.log(obj_txt)

console.log("deserealizar")
const obj_des = JSON.parse(obj_txt)
console.log(obj_des)

