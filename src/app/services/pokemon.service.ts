import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  API_URL:String = `https://pokeapi.co/api/v2/pokemon/`
  constructor() { }

  getPokemon(PokemonName:String){
    console.log(PokemonName)
  }
}
