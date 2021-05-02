"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, type, hp, speed, attack) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.speed = speed;
        this.attack = attack;
    }
    Pokemon.prototype.attackPokemon = function (b) {
        if (b.hp > this.attack) {
            b.hp = (b.hp - this.attack);
        }
        else {
            b.hp = 0;
        }
        console.log(this.name + "attaque -> " + b.name + "\n");
        console.log(b.name + " perd " + this.attack + "hp \n");
        return;
    };
    Pokemon.prototype.isAlive = function () {
        if (this.hp > 0) {
            return true;
        }
        return false;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
