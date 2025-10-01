import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home, Home as home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.html', 
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
}

