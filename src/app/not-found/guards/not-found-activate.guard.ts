import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { PokemonService } from '../../pokemons/services/pokemon.service';
import { map, switchMap, lastValueFrom } from 'rxjs';

export const notfoundGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const name = route.paramMap.get('name');
  const router = inject(Router);

  const pokemonServices = inject(PokemonService);
  return lastValueFrom(pokemonServices.pokemonNames$
    .pipe(
      map((names) => !!name && names.findIndex((item) => item === name) >= 0),
      switchMap((isFound) => isFound ? Promise.resolve(true) : router.navigateByUrl('/404', {
        browserUrl: 'no-pokemon',
      }))
    ));
}
