import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';
import { pokemonData } from '../models/pokemonData';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon?: pokemonData;
  type: string = 'Fighting';
  PokemonName: string = 'Charmander';
  img_pokemon: string = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/107.png';
  attributesTypes: string[] = ['Fire', 'Water', 'Earth'];

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }

  getPokemon(searchName: string) {
    this.service.getPokemon(searchName).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        };

        console.log(this.pokemon);
        console.log(res);
      },
      error: (error) => console.log(error)
    });
  }
}
