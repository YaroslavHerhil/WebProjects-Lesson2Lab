import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { EmojiComponent } from './emoji/emoji.component';
import { GamesOfLuckComponent } from './games-of-luck/games-of-luck.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServiceComponent, EmojiComponent, GamesOfLuckComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'servedServiced';
}
