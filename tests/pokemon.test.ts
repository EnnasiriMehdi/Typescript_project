import {Pokemon} from "../models/pokemon";
import {whoAttackFirst} from "../function";

const carapuce = new Pokemon("carapuce", "eau", 150, 50);
const salameche = new Pokemon("salameche", "feu", 140, 75);

describe('test pokemon', () => {
    it('should show the name of the pokemon', () => {
        expect(carapuce.test()).toBe(true);
    })

    it('ho attack first', () => {
        expect(salameche.speed.valueOf()).toBe(75);
        expect(whoAttackFirst(carapuce,salameche)).toBe(salameche);
    })
});
