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

  // ngOnInit() {
  //   this.gameService.getGames()
  //   .then(games => {
  //     console.log("dashboard called!!!!****", games)
  //     this.games = games});
  // }

  ngOnInit(): void {
    var gamesTemp = this.gameService.getGames();
    // console.log("gamesTemp", gamesTemp)
    this.gameService.getGames()
    .subscribe( games => {
      // console.log("dashboard games***", games)
      this.games = games;
    })
  }
}
