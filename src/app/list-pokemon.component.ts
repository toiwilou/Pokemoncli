import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pockemon';
import { POKEMONS } from './mocks-pockemons';
import { Router } from '@angular/router';
  
@Component({
    selector: 'list-pokemon',
    templateUrl: './list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {
  
    pokemons: Pokemon[] | undefined;
  
    constructor(private router: Router) { }
  
    ngOnInit(): void {
        this.pokemons = POKEMONS;
    }
  
    selectPokemon(pokemon: Pokemon): void {
        console.log('Vous avez selectionné ' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
  
}