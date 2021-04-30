"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = void 0;
var Battle = /** @class */ (function () {
    function Battle(pokemon1, pokemon2) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
        this.roundCpt = 0;
    }
    Battle.prototype.whoAttackFirst = function () {
        if (this.pokemon1.speed === this.pokemon2.speed) {
            return (Math.round(Math.random()) === 0 ? this.pokemon1 : this.pokemon2);
        }
        else if (this.pokemon1.speed > this.pokemon2.speed) {
            return this.pokemon1;
        }
        return this.pokemon2;
    };
    Battle.prototype.round = function (firstAttacker, secondAttacker) {
        firstAttacker.attackPokemon(secondAttacker);
        if (!secondAttacker.isAlive()) {
            console.log(secondAttacker.name + " est mort !");
        }
        secondAttacker.attackPokemon(firstAttacker);
        if (!firstAttacker.isAlive()) {
            console.log(firstAttacker.name + " est mort !");
        }
    };
    Battle.prototype.fight = function () {
        while (this.pokemon1.getHp() > 0 && this.pokemon2.getHp() > 0) {
            if (this.whoAttackFirst() === this.pokemon1) {
                this.round(this.pokemon1, this.pokemon2);
            }
            else {
                this.round(this.pokemon2, this.pokemon1);
            }
        }
        if (!this.pokemon1.isAlive()) {
            return this.pokemon2;
        }
        return this.pokemon1;
    };
    return Battle;
}());
exports.Battle = Battle;
