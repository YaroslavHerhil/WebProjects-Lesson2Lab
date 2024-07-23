import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { NewStuffComponent } from './new-stuff/new-stuff.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResumeComponent, NewStuffComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'secondAngle';
}
