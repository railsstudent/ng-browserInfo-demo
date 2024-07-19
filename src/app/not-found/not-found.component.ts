import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h3>The page you are looking for was moved.  Please click the link to return to home page.</h3>
    <div class="back">
      <a routerLink="/pokemon-list">Back to home</a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundComponent {}