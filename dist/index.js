"use strict";
let mensaje = "hola que tal";
mensaje = "despues del breakpoint";
console.log(mensaje, typeof mensaje);
mensaje = "mensaje final";
const arr = ["Array", "Hola"];
console.log(arr, typeof arr);
let age = 27;
let youngAdult = true;
const myName = "Lucía Martínez Cerón";
console.log(typeof myName);
const suma = (a, b) => {
    return a + b;
};
console.log(suma(4, 5));
let animal = ["caballito", "de", "mar"];
let num = [33, 44, 55];
let animales = ["caballito", "de", "mar"];
let nums = [33, 44, 55];
let num2 = [];
num2 = [44, 55];
console.log(typeof num, typeof num2);
let nameAndAge = ["Lucía", 27];
let fullNameAndAge = [["Lucía", "Martínez", "Cerón"], 27];
nameAndAge.push(12);
console.log(nameAndAge);
var Tallas;
(function (Tallas) {
    Tallas[Tallas["S"] = 0] = "S";
    Tallas[Tallas["M"] = 1] = "M";
    Tallas[Tallas["L"] = 2] = "L";
    Tallas[Tallas["XL"] = 3] = "XL";
})(Tallas || (Tallas = {}));
var Tallas2;
(function (Tallas2) {
    Tallas2["Peque\u00F1a"] = "S";
    Tallas2["Mediana"] = "M";
    Tallas2["Grande"] = "L";
    Tallas2["Extragrande"] = "XL";
})(Tallas2 || (Tallas2 = {}));
const talla = Tallas2.Pequeña;
console.log(talla);
const state = 2;
console.log(state);
const object = { num: 1, name: "pato" };
const mila = {
    name: "mila",
    type: "cat",
    age: 3,
    sterilized: true,
    owner: {
        name: "Lucía",
        age: 27,
    }
};
console.log(mila);
//# sourceMappingURL=index.js.map