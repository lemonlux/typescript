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


const object: { num: number, name: string} = {num: 1,  name: "pato"}

type Owner = {
    name: string
    age: number
}

type Pet = {
    name: string
    type: string
    age: number
    sterilized: boolean
    owner: Owner
    }

    const mila: Pet = {
        name: "mila",
        type: "cat",
        age: 3,
        sterilized: true,
        owner: {
            name: "Lucía",
            age: 27,
        }
    }

    console.log(mila)

    let pets: Pet[] = []

    pets = [
        {
            name: "mila",
            type: "cat",
            age: 3,
            sterilized: true,
            owner: {
                name: "Lucía",
                age: 27,
            }
        },
        {
            name: "menta",
            type: "cat",
            age: 4,
            sterilized: true,
            owner: {
                name: "Miguel",
                age: 10,
            }
        },
        {
            name: "oreo",
            type: "cat",
            age: 2,
            sterilized: true,
            owner: {
                name: "Dani",
                age: 23,
            }
        }
    ]

    const sum = (x: number, y: number): number => {
        return x + y;
    }
    
    const isYoung = (a: number): string =>{
    if(a <= 30) return 'is young'
    return 'is not young'
    }

    function error(msg: string): never {
        throw new Error(msg);
    }

    let talla2: number | string = 38

talla2 = "M"

type Alumno = {
    name: string,
    age: number,
    subjects: string[],
}

type Profesor = {
    name: string,
    age: number,
    rol: string,

}

const colegio: Alumno | Profesor = { name: " ", age: 30 , rol: ""}