import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  host: { 'hostID': crypto.randomUUID().toString() }
})
export class GameComponent {
  pickCardAnimation = false;
  constructor() {}

  takeCard() {
      this.pickCardAnimation = true;
  }

}
