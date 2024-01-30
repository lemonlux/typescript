// let mensaje: string = "hola que tal";

// mensaje = "despues del breakpoint";

// console.log(mensaje, typeof mensaje);

// mensaje = "mensaje final";

// const arr = ["Array", "Hola"];

// console.log(arr, typeof arr);

// let age: number = 27;

// let youngAdult: boolean = true;

// const myName: string = "Lucía Martínez Cerón";

// console.log(typeof myName);

// const suma = (a: number, b: number) => {
//   return a + b;
// };

// console.log(suma(4, 5));

// let animal: string[] = ["caballito", "de", "mar"];
// let num: number[] = [33, 44, 55];
// let animales: Array<string> = ["caballito", "de", "mar"];
// let nums: Array<number> = [33, 44, 55];
// let num2 = []; // tipo any

// // nums.map(num => num.) el autocompletado sugiere métodos segun el tipo de dato

// num2 = [44, 55];

// console.log(typeof num, typeof num2);

// let nameAndAge: [string, number] = ["Lucía", 27];

// let fullNameAndAge: [string[], number] = [["Lucía", "Martínez", "Cerón"], 27];

// nameAndAge.push(12); // nos lo añade después y nos destruye la dupla

// console.log(nameAndAge);

// enum Tallas {
//   S,
//   M,
//   L,
//   XL,
// }

// enum Tallas2 {
//   Pequeña = "S",
//   Mediana = "M",
//   Grande = "L",
//   Extragrande = "XL",
// }

// const talla = Tallas2.Pequeña;

// console.log(talla);

// const enum LoadingState {
//   Idle,
//   Loading,
//   Success,
//   Error,
// }

// const state = LoadingState.Success;

// console.log(state);

// const object: { num: number; name: string } = { num: 1, name: "pato" };

// type Owner = {
//   name: string;
//   age: number;
// };

// type Pet = {
//   name: string;
//   type: string;
//   age: number;
//   sterilized: boolean;
//   owner: Owner;
// };

// const mila: Pet = {
//   name: "mila",
//   type: "cat",
//   age: 3,
//   sterilized: true,
//   owner: {
//     name: "Lucía",
//     age: 27,
//   },
// };

// console.log(mila);

// let pets: Pet[] = [];

// pets = [
//   {
//     name: "mila",
//     type: "cat",
//     age: 3,
//     sterilized: true,
//     owner: {
//       name: "Lucía",
//       age: 27,
//     },
//   },
//   {
//     name: "menta",
//     type: "cat",
//     age: 4,
//     sterilized: true,
//     owner: {
//       name: "Miguel",
//       age: 10,
//     },
//   },
//   {
//     name: "oreo",
//     type: "cat",
//     age: 2,
//     sterilized: true,
//     owner: {
//       name: "Dani",
//       age: 23,
//     },
//   },
// ];

// const sum = (x: number, y: number): number => {
//   return x + y;
// };

// const isYoung = (a: number): string => {
//   if (a <= 30) return "is young";
//   return "is not young";
// };

// function error(msg: string): never {
//   throw new Error(msg);
// }

// let talla2: number | string = 38;

// talla2 = "M";

// type Alumno = {
//   name: string;
//   age: number;
//   course: number;
// };

// type Profesor = {
//   name: string;
//   age: number;
//   subjects: string[];
// };

// const colegio: Alumno | Profesor = { name: " ", age: 30, subjects: [] };

// type ExpireDate = {
//   day: number;
//   month: number;
//   year: number;
// };

// type Product = {
//   name: string;
//   type: string;
// };

// const foodItem: Product & ExpireDate = {
//   name: "chicken",
//   type: "meat",
//   day: 11,
//   month: 1,
//   year: 2024,
// };

// const f = (x: number[]): number[] => {
//   return x;
// };

// const validNums = (x: number | string): number => {
//   if (typeof x === "number") {
//     return x + 2;
//   } else {
//     return parseInt(x) + 2;
//   }
// };

// console.log(validNums("9"), validNums(9));

// type Fibonacci = 0 | 1 | 2 | 3 | 5 | 8

// const numFib: Fibonacci = 5

// const input = document.getElementById('username') as HTMLInputElement

class Character {
  private _id: number;
  readonly name: string;
  lvl: number;
  hp: number;
  child?: string;
  constructor(_id: number, name: string, lvl: number, hp: number) {
    this._id = _id;
    this.name = name;
    this.lvl = lvl;
    this.hp = hp;
  }

  lowerHp(damage: number): number {
    this.hp = this.hp - damage;
    return this.hp;
  }
}

const character = new Character(1, "Mulan", 100, 1000);

const paco = new Character(1, "Paco", 1000000, 1000000);

paco.lowerHp(999999);

console.log(paco);

class CharacterTwo {
  child?: string;
  static movie: string = "Los juegos del hambre"
  constructor(
    private readonly _id: number,
    public name: string,
    public lvl: number,
    private _hp: number
  ) {}

  lowerHp(damage: number): number {
    this.hp = this.hp - damage;
    return this.hp;
  }

  get id(): number {
    return this._id;
  }
  set hp(damage: number) {
    this._hp = this._hp - damage;
  }
}

const paca = new CharacterTwo(2, "Paca", 100000, 10000);

paca.hp = 200;
paca.id

console.log(paca, paca.id);

CharacterTwo.movie


function names(namesAndAges: Array<[string, number]>): string[] {
    let names: string[] = []
     namesAndAges.map((nameAndAge) => names.push(nameAndAge[0]))
      return names
  }

  console.log(names([['Amir', 34], ['Betty', 17]]))

  console.log(names([['Betty', 17], ['Cindy', 26], ['Dalili', 82], ['Ebony', 10]]))

  function namesTwo(namesAndAges: [string, number][]): string[] {
    return namesAndAges.map(nameAndAge => nameAndAge[0]);
  }