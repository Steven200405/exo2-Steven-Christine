import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Accueil } from './accueil/accueil';
import { Liste } from './liste/liste';
import { Gestion } from './gestion/gestion';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Accueil, Liste, Gestion],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('exo2-christine-steven');
}
