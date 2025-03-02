import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../services/pokemon.service';
@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  type:String = 'Fighting'
  PokemonName:String = 'Charmader'
  img_pokemon:String = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/107.png'
  attributesTypes:String[] = ['Fire', 'water', 'eath']
  
  constructor(
    private service:PokemonService
  ){}
  
  ngOnInit(): void {
    this.service.getPokemon('tuc')
  }
  

}
