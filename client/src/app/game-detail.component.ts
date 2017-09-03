import 'rxjs/add/operator/switchMap'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Location } from '@angular/common'

import { GameDetails } from './game-details'
import {GameService } from './services/game.service'

@Component({
  selector: 'game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent implements OnInit{
  gameDetails: GameDetails;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  // *BUG: switchmap not transferring data to game details
  ngOnInit(): void {
    console.log("this.getGame(3044)", this.gameService.getGame(3044))
    this.route.paramMap
    .switchMap((params: ParamMap) => this.gameService.getGame(+params.get('id')))
    .subscribe( gameDetails => {
      this.gameDetails = gameDetails
      console.log("game-detail gameDetails", gameDetails)
      console.log("game-detail this.gameDetails", this.gameDetails)
    });
  }

  // may not work
  // getGame(id: number): void {
  //   this.gameService.getGame(+id).subscribe(game => {
  //     console.log("gameComp game***", game)
  //     console.log("gameComp this.game***", this.game)
  //     this.game = game;
  //   });
  // }

  // ngOnInit(): void {
  //   console.log("this.getGame(+this.game.id)", this.getGame(3044))
  //   this.getGame(3044)
  //   // this.getGame(this.game.id)
  // }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.gameService.update(this.game)
  //   .then( () => this.goBack())
  // }
}
