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
  city = 'Seattle';

  games: Game[];
  selectedGame: Game;

  constructor(
    private gameService: GameService,
    private router: Router,
  ){}

  // Methods
  getGames(): void {
    this.gameService.getGames()
    .then(games => this.games = games);
  }

  ngOnInit(): void {
    this.getGames();
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }


  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedGame.id])
  }

  add(name: string): void {
    name = name.trim();

    if(!name) return;

    this.gameService
    .create(name)
    .then( game => {
      this.games.push(game)
      this.selectedGame = null;
    })
  }

  //game deleted here over game.service.ts because component is still responsible for updating the display. Thus, it comp removes the deleted game from the array and resets the selectedGame if necessary
  delete(game: Game): void {
    this.gameService
    .delete(game.id)
    .then( () => {
      this.games = this.games.filter( singleGame => singleGame !== game)
      if(this.selectedGame === game ) this.selectedGame = null
    })
  }
}

/*
Working apis:
to storefront:
http://store.steampowered.com/api/featured/

by app id: for binding of isaac
http://store.steampowered.com/api/appdetails/?appids=250900

featured categories
may be best and have the most info
http://store.steampowered.com/api/featuredcategories/
*/
