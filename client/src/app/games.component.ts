import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Game } from './game'
import { GameService } from './services/game.service'

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [ ],
})
export class GamesComponent implements OnInit {
  games: Game[];
  selectedGame: Game;

  constructor(
    private gameService: GameService,
    private router: Router,
  ){}

  // Methods

  // old way
  // getGames(): void {
  //   this.gameService.getGames()
  //   .then(games => this.games = games);
  // }

  getGames(): void {
    this.gameService.getGames().subscribe(games => {
      // console.log("gameComp games***", games)
      this.games = games;
    });
  }


  onSelect(game: Game): void {
    this.selectedGame = game;
  }


  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedGame.id])
  }

  // add(name: string): void {
  //   name = name.trim();

  //   if(!name) return;

  //   this.gameService
  //   .create(name)
  //   .then( game => {
  //     this.games.push(game)
  //     this.selectedGame = null;
  //   })
  // }

  //game deleted here over game.service.ts because component is still responsible for updating the display. Thus, it comp removes the deleted game from the array and resets the selectedGame if necessary
  // delete(game: Game): void {
  //   this.gameService
  //   .delete(game.id)
  //   .then( () => {
  //     this.games = this.games.filter( singleGame => singleGame !== game)
  //     if(this.selectedGame === game ) this.selectedGame = null
  //   })
  // }

  ngOnInit() {
    this.getGames()
  }

  // ngOnInit() {
  //   this.gameService.getGames().subscribe(games => {
  //     this.games = games;
  //   });
  // }
}
