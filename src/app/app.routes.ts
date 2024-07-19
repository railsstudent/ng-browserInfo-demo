import { Route } from '@angular/router';
import { pokemonsResolver } from './pokemons/resolvers/pokemons.resolver';
import { pokemonResolver } from './pokemons/resolvers/pokemon.resolver';
import { notfoundGuard } from './not-found/guards/not-found-activate.guard';
import NotFoundComponent from './not-found/not-found.component';

export const routes: Route[] = [
  {
    path: 'pokemon-list',
    loadComponent: () => import('./pokemons/pokemon-list.component'),
    resolve: {
      pokemons: pokemonsResolver
    }
  },
  {
    path: 'pokemon-list/:name',
    canActivate: [notfoundGuard],
    loadComponent: () => import('./pokemons/pokemon-details.component'),
    resolve: {
      pokemon: pokemonResolver,
    }
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: ':name/info',
    redirectTo:  ({ params }) => {
      const name = params?.['name'] || '';
      return name ? `/pokemon-list/${name}` : 'pokemon-list';
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokemon-list',
  },
  {
    path: '**',
    redirectTo: 'pokemon-list',
  }
];
