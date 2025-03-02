import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly API_URL: string = `https://pokeapi.co/api/v2/pokemon/`;
  pokeData: pokemonData | any;

  constructor(private http: HttpClient) { }
  
  getPokemon(pokemonName: string): Observable<pokemonData> {
    return this.http.get<pokemonData>(`${this.API_URL}${pokemonName}`);
  }
}
