export class Pokemon{
    name: string;
    type: string;
    hp: number;
    speed: number;


    constructor(name: string, type: string, hp: number, speed: number) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.speed = speed;
    }

    test(): boolean {
        return true;
    }


}