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

    test(): boolean {
        return true;
    }

    attackPokemon( b : Pokemon): void{
        if (b.getHp() > this.attack) {
            b.setHp(b.getHp() - this.getAttack());
        }else{
            b.setHp(0);
        }
        console.log(this.name + "attaque -> "+ b.getName() + "\n");
        console.log(b.getName() + " perd " + this.attack + "hp \n");
        return;
    }

    isAlive(): boolean{
        if(this.hp > 0){
            return true;
        }
        return false;
    }
    getAttack(): number {
        return this.attack;
    }

    getName(): string {
        return this.name;
    }

    getHp(): number {
        return this.hp;
    }

    setHp(value: number) {
        this.hp = value;
        return;
    }
}