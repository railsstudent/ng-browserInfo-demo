import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <router-outlet />
  `,
})
export class AppComponent {
  name = 'BrowserInfo';
}
