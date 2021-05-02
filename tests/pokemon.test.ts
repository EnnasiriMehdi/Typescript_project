import {Pokemon} from "../src/models/pokemon";


const carapuce = new Pokemon("carapuce", "eau", 150, 75,10);
const salameche = new Pokemon("salameche", "feu", 140, 75,15);

describe('test pokemon', () => {


    it('carapuce attack salameche', () => {
        carapuce.attackPokemon(salameche);
        expect(salameche.hp).toBe(130);
    })

    it('carapuce to be alive', () => {
        expect(salameche.isAlive()).toBe(true);
    })

    it('carapuce to be dead', () => {
        carapuce.hp = 0;
        expect(carapuce.isAlive()).toBe(false);
    })


});
