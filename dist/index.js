"use strict";
class Character {
    constructor(_id, name, lvl, hp) {
        this._id = _id;
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
class CharacterTwo {
    constructor(_id, name, lvl, _hp) {
        this._id = _id;
        this.name = name;
        this.lvl = lvl;
        this._hp = _hp;
    }
    lowerHp(damage) {
        this.hp = this.hp - damage;
        return this.hp;
    }
    get id() {
        return this._id;
    }
    set hp(damage) {
        this._hp = this._hp - damage;
    }
}
const paca = new CharacterTwo(2, "Paca", 100000, 10000);
paca.hp = 200;
paca.id;
console.log(paca, paca.id);
//# sourceMappingURL=index.js.map