import { inject } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

export const pokemonsResolver = () => {
  return inject(PokemonService).data$;
}