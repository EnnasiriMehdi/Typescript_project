import {Pokemon} from "../models/pokemon";
import {battle, round, whoAttackFirst} from "../function";

const carapuce = new Pokemon("carapuce", "eau", 150, 75,140);
const salameche = new Pokemon("salameche", "feu", 140, 75,15);

describe('test pokemon', () => {


    it('carapuce attack salameche', () => {
        carapuce.attackPokemon(salameche);

    })



});
