import { ChangeDetectionStrategy, Component, inject, input } from "@angular/core";
import { Router, RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { PokemonSlim } from './types/pokemon-slim.type';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  template: `
    <h2>Pokemon List</h2>
    <div class="root">
      @for(row of pokemons(); track row.name) {
        <div class="row">
          <div>
            <label for="name">
              <span>Name: </span>
              <span id="name" name="name">{{ row.name | titlecase }}</span>
            </label>
          </div>
          <div>
            <span>Details: </span>
            <button (click)="navigate($event, row)">Show Details</button>
          </div>
        </div>
      } @empty {
        <p>No Pokemon Data</p>
      }
    </div>
  `,
  styles: `
    div.root {
      display: flex;
      flex-wrap: wrap;
    }

    div.row {
      flex: 1 1 calc(50% - 0.5rem);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonList {
  pokemons = input.required<PokemonSlim[]>();
  router = inject(Router);

  navigate(event: Event, row: PokemonSlim) {
    event.preventDefault();

    this.router.navigateByUrl(`/pokemon-list/${row.name}`, {
      browserUrl: this.router.parseUrl(`/${row.name}/info`),
    });
  }
}