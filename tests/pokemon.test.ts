import {Pokemon} from "../models/pokemon";
import {battle, round, whoAttackFirst} from "../function";

const carapuce = new Pokemon("carapuce", "eau", 150, 50,140);
const salameche = new Pokemon("salameche", "feu", 140, 75,15);

describe('test pokemon', () => {
    it('should show the name of the pokemon', () => {
        expect(carapuce.test()).toBe(true);
    })

    it('who attack first', () => {
        expect(salameche.speed).toBe(75);
        expect(whoAttackFirst(carapuce,salameche)).toBe(salameche);
    })

    it('salamèche attack carapuce ', () => {
        let previousHp = carapuce.getHp();
        salameche.attackPokemon(carapuce);
        let expectedHp = previousHp - salameche.getAttack();
        expect(carapuce.getHp()).toBe(expectedHp);
    })

    it('salamèche fight carapuce 1 round ', () => {
        let carapuceBefore = carapuce.getHp();
        let salamecheBefore = salameche.getHp();
        if( whoAttackFirst(carapuce, salameche) === carapuce){
            round(carapuce,salameche);
        }else {
            round(salameche,carapuce);
        }
        expect(carapuce.getHp()).toBe(carapuceBefore - salameche.getAttack());
        expect(salameche.getHp()).toBe(salamecheBefore - carapuce.getAttack());
    })

    it('salamèche fight carapuce to death ', () => {
        expect(battle(carapuce, salameche)).toBe(carapuce);
    })


});
