import {Pokemon} from "../models/pokemon";

const pokemon = new Pokemon("testo");

test('test pokemon', () => {
    expect(pokemon.test()).toBe(true);
});