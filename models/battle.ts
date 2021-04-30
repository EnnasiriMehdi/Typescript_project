import {Pokemon} from "./pokemon";

export class Battle{
    pokemon1 : Pokemon;
    pokemon2 : Pokemon;
    roundCpt : number;

    constructor(pokemon1 : Pokemon, pokemon2 : Pokemon) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
        this.roundCpt = 0;
    }

    whoAttackFirst(): Pokemon {
        if (this.pokemon1.speed === this.pokemon2.speed) {
            return (Math.round(Math.random()) === 0 ? this.pokemon1:this.pokemon2);
        }
        else if(this.pokemon1.speed > this.pokemon2.speed){
            return this.pokemon1;
        }
        return this.pokemon2;
    }

    round(firstAttacker: Pokemon, secondAttacker: Pokemon) : void{
            firstAttacker.attackPokemon(secondAttacker);
            if (!secondAttacker.isAlive()) {
                console.log(secondAttacker.name + " est mort !");
            }
            secondAttacker.attackPokemon(firstAttacker);
            if (!firstAttacker.isAlive()) {
                console.log(firstAttacker.name + " est mort !");
            }
    }

    fight() : Pokemon{
        while (this.pokemon1.hp > 0 && this.pokemon2.hp > 0 ){
            if( this.whoAttackFirst() === this.pokemon1){
                this.round(this.pokemon1,this.pokemon2);
            }else {
                this.round(this.pokemon2,this.pokemon1);
            }
        }
        if (!this.pokemon1.isAlive()){
            return this.pokemon2;
        }
        return this.pokemon1;
    }
}
