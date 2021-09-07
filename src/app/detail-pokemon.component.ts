import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pockemon';
import { POKEMONS } from './mocks-pockemons';

@Component({
  selector: 'detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

  pokemons: Pokemon[] | undefined;
  pokemon = {
    id: 1,
    name: "Bulbizarre",
    hp: 25,
    cp: 5,
    picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    types: ["Plante", "Poison"],
    created: new Date()
}

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.pokemons = POKEMONS;

  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
  }

}
