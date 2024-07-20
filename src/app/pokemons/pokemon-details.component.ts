import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Pokemon } from './types/pokemon.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h3>Pokemon Details</h3>
    <div class="row">
      @let p = pokemon();
      @if (p) {
        <div>
          <span>Id: </span>
          <span>{{ p.id }}</span>
        </div>
        <div>
          <span>Name: </span>
          <span>{{ p.name }}</span>
        </div>
        <div>
          <span>Weight: </span>
          <span>{{ p.weight }}</span>
        </div>
        <div>
          <span>Height: </span>
          <span>{{ p.height }}</span>
        </div>
        <div>
          <img [src]="p.imageUrl" alt="{{ p.name }}'s Image" />
        </div>
      } @else {
        <p>No Data</p>
      }
    </div>
    <div class="back">
      <a routerLink="/pokemon-list">Back to here</a>
    </div>
  `,
  styles: `
    span {
      font-size: 1rem;
    }

    div.row > div {
      margin-bottom: 0.5rem;
    }

    img {
      width: 150px;
      height: 150px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonDetails {
  pokemon = input.required<Pokemon | undefined>();
}