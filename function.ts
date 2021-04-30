import {Pokemon} from "./models/pokemon";

export function whoAttackFirst(a : Pokemon, b :Pokemon): Pokemon {
    if (a.speed > b.speed){
        return a;
    }else if (a.speed === b.speed) {
        let random = (Math.random()* 2)+1;
        if (random === 0){
            return a;
        }else{
            return b;
        }
    }else{
        return b;
    }
}

export function round(firstAttacker: Pokemon, secondAttacker: Pokemon) : void{
    firstAttacker.attackPokemon(secondAttacker);
    if(!secondAttacker.isAlive()){
        console.log(secondAttacker.name + " est mort !");
    }
    secondAttacker.attackPokemon(firstAttacker);
    if(!firstAttacker.isAlive()){
        console.log(firstAttacker.name + " est mort !");
    }
}

export function battle(a: Pokemon, b : Pokemon){
    while (a.getHp() > 0 && b.getHp() > 0 ){
        if( whoAttackFirst(a, b) === a){
            round(a,b);
        }else {
            round(b,a);
        }
    }
    if (!a.isAlive()){
        return b;
    }
    return a;
}

