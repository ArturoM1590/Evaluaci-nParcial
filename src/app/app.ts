import { Component, signal } from '@angular/core';
import { RouterOutlet, ɵEmptyOutletComponent } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Componente2 } from './componente2/componente2';
import { Componente3 } from './componente3/componente3';
import { Componente4 } from './componente4/componente4';

@Component({
  imports: [RouterOutlet, Inicio, Componente2, Componente3, Componente4],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mi-parcial');
}
