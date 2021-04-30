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
        if (b.getHp() > this.attack) {
            b.setHp(b.getHp() - this.getAttack());
        }
        else {
            b.setHp(0);
        }
        console.log(this.name + "attaque -> " + b.getName() + "\n");
        console.log(b.getName() + " perd " + this.attack + "hp \n");
        return;
    };
    Pokemon.prototype.isAlive = function () {
        if (this.hp > 0) {
            return true;
        }
        return false;
    };
    Pokemon.prototype.getAttack = function () {
        return this.attack;
    };
    Pokemon.prototype.getName = function () {
        return this.name;
    };
    Pokemon.prototype.getHp = function () {
        return this.hp;
    };
    Pokemon.prototype.setHp = function (value) {
        this.hp = value;
        return;
    };
    Pokemon.prototype.getSpeed = function () {
        return this.speed;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
