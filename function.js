"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.battle = exports.round = exports.whoAttackFirst = void 0;
function whoAttackFirst(a, b) {
    if (a.speed > b.speed) {
        return a;
    }
    else if (a.speed === b.speed) {
        var random = (Math.random() * 2) + 1;
        if (random === 0) {
            return a;
        }
        else {
            return b;
        }
    }
    else {
        return b;
    }
}
exports.whoAttackFirst = whoAttackFirst;
function round(firstAttacker, secondAttacker) {
    firstAttacker.attackPokemon(secondAttacker);
    if (!secondAttacker.isAlive()) {
        console.log(secondAttacker.name + " est mort !");
    }
    secondAttacker.attackPokemon(firstAttacker);
    if (!firstAttacker.isAlive()) {
        console.log(firstAttacker.name + " est mort !");
    }
}
exports.round = round;
function battle(a, b) {
    while (a.getHp() > 0 && b.getHp() > 0) {
        if (whoAttackFirst(a, b) === a) {
            round(a, b);
        }
        else {
            round(b, a);
        }
    }
    if (!a.isAlive()) {
        return b;
    }
    return a;
}
exports.battle = battle;
