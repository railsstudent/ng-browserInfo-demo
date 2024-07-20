import { inject, Injectable } from "@angular/core";
import { catchError, map, Observable, of, shareReplay, toArray } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { PokemonSlim } from "../types/pokemon-slim.type";
import { Pokemon, RawPokemon } from "../types/pokemon.type";

const POKEMON_LIST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=20';
const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  http = inject(HttpClient);

  data$ = this.http.get<{ results: PokemonSlim[] }>(POKEMON_LIST_URL)
  .pipe(
    map(({ results }) => results),
    shareReplay(1),
    catchError((err) => {
      console.error(err);
      return of([] as PokemonSlim[])
    })
  );

  pokemonNames$ = this.data$.pipe(
    map((pokemons) => pokemons.map(({ name }) => name)),
  )

  getPokemon(name: string): Observable<Pokemon | undefined> {
    if (!name) {
      return of(undefined);
    }

    return this.http.get<RawPokemon>(`${POKEMON_URL}/${name}`)
      .pipe(
        map(({ id, name, sprites, weight, height }) => ({ id, name, weight, height, imageUrl: sprites.front_shiny }) as Pokemon),
        catchError((err) => {
          console.error(err);
          return of(undefined);
        })
      );
  }
}

