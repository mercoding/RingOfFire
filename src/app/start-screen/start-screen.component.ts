import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss',
  host: { 'hostID': crypto.randomUUID().toString() }
})
export class StartScreenComponent {
  constructor(private router: Router) {

  }

  newGame() {
    this.router.navigateByUrl('/game');
  }
}
