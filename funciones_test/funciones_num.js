function par_impar (num) {
    if (num % 2 === 0){
        return "par"
    } else {
        return "impar"
    }
}

module.exports = {
    par_impar : par_impar 
}