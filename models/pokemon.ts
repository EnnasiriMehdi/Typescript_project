export class Pokemon{
    name: string;
    type: string;
    hp: number;
    speed: number;
    attack: number;

    constructor(name: string, type: string, hp: number, speed: number, attack: number) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.speed = speed;
        this.attack = attack;
    }

    attackPokemon( b : Pokemon): void{
        if (b.hp > this.attack) {
            b.hp = (b.hp - this.attack);
        }else{
            b.hp = 0;
        }
        console.log(this.name + "attaque -> "+ b.name + "\n");
        console.log(b.name + " perd " + this.attack + "hp \n");
        return;
    }

    isAlive(): boolean{
        if(this.hp > 0){
            return true;
        }
        return false;
    }
}
