import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

export const pokemonResolver = (route: ActivatedRouteSnapshot) => {
  const name = route.paramMap.get('name') || '';
  return inject(PokemonService).getPokemon(name);
}