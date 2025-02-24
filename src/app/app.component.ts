import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: { 'hostID': crypto.randomUUID().toString() }
})
export class AppComponent {
  title = 'RingOfFire';
}
