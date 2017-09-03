import { Component, OnInit } from '@angular/core'

import { Game } from './game'
import { GameService } from './services/game.service'

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService){}

  ngOnInit(): void {
    this.gameService.getGames()
    .then(games => this.games = games.slice(1,9));
  }
}
