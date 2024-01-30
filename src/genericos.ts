function log<V, T> (a: V, b: T): T {
console.log(a,b)
return b

}

const arrowLog = <V, T> (a: V, b: T): T =>{
    console.log(a,b)
return b
}

log<number, number>(5,4)

log("hola", 6)

function first<T>(elements: Array<T>): T {
    return elements[0];
  }


  first<boolean>([true, false]);
  first<number>([1])


const fetchData = async <T>(url: string): Promise<T> =>{

    const response = await fetch(`${url}`)
    return response

}

type User = {
    id: number,
    name: string,
}

// const user = fetchData<User>('/usuarios')


// async function fetchDataFunction  <T, V>(url: V): Promise<T> {

//     const response = await fetch(`${url}`)
//     return response.json

// }

function second<T>(elements: Array<T>): T {
    return elements[0];
  }
  second<boolean>([true, false]);