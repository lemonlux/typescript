"use strict";
class Character {
    constructor(id, name, lvl, hp) {
        this.id = id;
        this.name = name;
        this.lvl = lvl;
        this.hp = hp;
    }
    lowerHp(damage) {
        this.hp = this.hp - damage;
        return this.hp;
    }
}
const character = new Character(1, "Mulan", 100, 1000);
const paco = new Character(1, "Paco", 1000000, 1000000);
paco.lowerHp(999999);
console.log(paco);
//# sourceMappingURL=index.js.map