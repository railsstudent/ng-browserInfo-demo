import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { PokemonService } from '../../pokemons/services/pokemon.service';
import { map, switchMap, lastValueFrom, tap } from 'rxjs';


export const notfoundGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const name = route.paramMap.get('name');
  const router = inject(Router);

  console.log('name', name);

  const pokemonServices = inject(PokemonService);
  return lastValueFrom(pokemonServices.pokemonNames$
    .pipe(
      map((names) => !!name && names.findIndex((item) => item === name) >= 0),
      tap((v) => console.log(v)),
      switchMap((isFound) => isFound ? Promise.resolve(true) : router.navigateByUrl('/404', {
        browserUrl: 'no-pokemon',
      }))
    ));
}
