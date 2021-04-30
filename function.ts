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

export async function round(firstAttacker: Pokemon, secondAttacker: Pokemon) : Promise<boolean>{
    throw setTimeout(() => {
        firstAttacker.attackPokemon(secondAttacker);
        if (!secondAttacker.isAlive()) {
            console.log(secondAttacker.name + " est mort !");
        }
        secondAttacker.attackPokemon(firstAttacker);
        if (!firstAttacker.isAlive()) {
            console.log(firstAttacker.name + " est mort !");
        }
    }, 500);
    return true;
}

export async function battle(a:  Pokemon, b : Pokemon) : Promise<Pokemon>{
    while (a.hp > 0 && b.hp > 0 ){
        if( whoAttackFirst(a, b) === a){
            await round(a,b);
        }else {
            await round(b,a);
        }
    }
    if (!a.isAlive()){
        return b;
    }
    return a;
}

