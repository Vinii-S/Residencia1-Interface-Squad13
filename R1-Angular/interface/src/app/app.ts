import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-testes',
  standalone: true,
  templateUrl: './testes-component/testes-component.html',
  styleUrl: './testes-component/testes-component.scss'
})
export class TestesComponent {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('interface');
}
