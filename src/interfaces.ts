interface Animal{
    name: string,
    oviparo: boolean,
    avgAge: number,

    sound(): string

}

class Cerdo implements Animal{
    name= "cerdo";
    oviparo= false;
    avgAge= 15;

    sound(){
        return "oink"
    }
}