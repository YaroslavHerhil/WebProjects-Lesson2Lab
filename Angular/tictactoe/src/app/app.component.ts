import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TictactoeGameComponent } from './tictactoe-game/tictactoe-game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TictactoeGameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tictactoe';
}

