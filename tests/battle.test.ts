import {Pokemon} from "../models/pokemon";
import {Battle} from "../models/battle";

let carapuce: Pokemon;
let salameche: Pokemon;
let battle : Battle;

describe('test battle', () => {

    beforeEach(() => {
        carapuce = new Pokemon("carapuce", "eau", 150, 75,140);
        salameche = new Pokemon("salameche", "feu", 140, 75,15);
        battle = new Battle(carapuce,salameche);
    });

    it('who attack first', () => {
        salameche.speed = 80;
        expect(salameche.speed).toBe(80);
        expect(battle.whoAttackFirst()).toBe(salameche);
    })

    describe('who attack first rand 1 ', () => {
        beforeEach(() => {
            jest.spyOn(global.Math, 'random').mockReturnValue(1);
        });
        it('should return a random pokemon when their speed is equal', () => {
            expect(battle.whoAttackFirst()).toBe(salameche);
        });
        afterEach(() => {
            jest.spyOn(global.Math, 'random').mockRestore();
        });
    })

    describe('who attack first rand 0 ', () => {
        beforeEach(() => {
            jest.spyOn(global.Math, 'random').mockReturnValue(0);
        });
        it('should return a random pokemon when their speed is equal', () => {
            expect(battle.whoAttackFirst()).toBe(carapuce);
        });
        afterEach(() => {
            jest.spyOn(global.Math, 'random').mockRestore();
        });
    })

    it('salamèche attack carapuce ', () => {
        let previousHp = carapuce.hp;
        salameche.attackPokemon(carapuce);
        let expectedHp = previousHp - salameche.attack;
        expect(carapuce.hp).toBe(expectedHp);
    })

    it('salamèche fight carapuce 1 round ', () => {
        let carapuceBefore = carapuce.hp;
        let salamecheBefore = salameche.hp;
        if( battle.whoAttackFirst() === carapuce){
            battle.round(carapuce,salameche);
        }else {
            battle.round(salameche,carapuce);
        }
        expect(carapuce.hp).toBe(carapuceBefore - salameche.attack);
        expect(salameche.hp).toBe(salamecheBefore - carapuce.attack);
    })

    it('salamèche fight carapuce to death ', () => {
        battle.fight().then(Pokemon => expect(Pokemon).toBe(carapuce) );
    })


});
