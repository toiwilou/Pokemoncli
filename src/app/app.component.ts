import { Component } from '@angular/core';
import { POKEMONS } from './mocks-pockemons';
import { OnInit } from '@angular/core';
import { Pokemon } from './pockemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Liste des pokemons';
  value = '';
  age = 10;

  pokemons: Pokemon[] | undefined;

  ngOnInit () {
    this.pokemons = POKEMONS;
  } 

  onClick() {
    console.log('salut');
  }

  onKey(event: KeyboardEvent) {
    this.value = 'Bonjour ' + (<HTMLInputElement>event.target).value;
  }

  selectPokemon(pokemon: Pokemon){
    
  }
}
