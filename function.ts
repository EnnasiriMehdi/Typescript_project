import {Pokemon} from "./models/pokemon";

export function whoAttackFirst(a : Pokemon, b :Pokemon): Pokemon {
    if (a.speed > b.speed){
        return a;
    }else {
        return b;
    }
}

