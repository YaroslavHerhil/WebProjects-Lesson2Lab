import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VegetableComponent } from './vegetable/vegetable.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VegetableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstANGLE';
}
