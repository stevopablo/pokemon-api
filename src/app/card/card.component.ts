import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  ngOnInit(): void {
  }
  type:String = 'Fighting'
  PokemonName:String = 'Charmader'
  img_pokemon:String = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/107.png'
  attributesTypes:String[] = ['Fire', 'water', 'eath']


}
