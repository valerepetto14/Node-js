const { par_impar } = require("../funciones_test/funciones_num")

test("par", () => {
    expect(par_impar(2)).toBe('par')
    expect(par_impar(4)).toBe('par')
    expect(par_impar(6)).toBe('par')
})

test("impar", () => {
    expect(par_impar(5)).toBe('impar')
    expect(par_impar(7)).toBe('impar')
    expect(par_impar(9)).toBe('impar')
})

let hola = "hola";