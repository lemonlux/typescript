let mensaje: string = "hola que tal"

mensaje = "despues del breakpoint"

console.log(mensaje, typeof mensaje)

mensaje= "mensaje final"

const arr = ["Array", "Hola"]

console.log(arr, typeof arr)

let age: number = 27

let youngAdult: boolean = true

const myName: string = "Lucía Martínez Cerón"

console.log(typeof myName)

const suma =(a: number, b: number) =>{
return a + b
}

console.log(suma(4,5))

let animal: string[] = ["caballito", "de", "mar"]
let num: number[] = [33, 44, 55]
let animales: Array<string> = ["caballito", "de", "mar"]
let nums: Array<number> = [33, 44, 55]
let num2 = [] // tipo any

// nums.map(num => num.) el autocompletado sugiere métodos segun el tipo de dato


num2= [44, 55]

console.log(typeof num, typeof num2)

let nameAndAge: [string, number] = ["Lucía", 27]

let fullNameAndAge: [string[], number] = [["Lucía", "Martínez", "Cerón"], 27]

nameAndAge.push(12) // nos lo añade después y nos destruye la dupla

console.log(nameAndAge)

enum Tallas {S, M, L, XL}

enum Tallas2 {Pequeña = 'S', Mediana = 'M', Grande = 'L', Extragrande = 'XL'}

const talla = Tallas2.Pequeña

console.log(talla)

const enum LoadingState {Idle, Loading, Success, Error}

const state = LoadingState.Success

console.log(state)