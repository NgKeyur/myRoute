import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrackMyRouteComponent } from './track-my-route/track-my-route.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TrackMyRouteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MyRoute';
}
