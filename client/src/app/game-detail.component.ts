import 'rxjs/add/operator/switchMap'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Location } from '@angular/common'

import { Game } from './game'
import {GameService } from './services/game.service'

@Component({
  selector: 'game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent implements OnInit{
  game: Game;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.gameService.getGame(+params.get('id')))
    .subscribe( game => this.game = game);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.gameService.update(this.game)
    .then( () => this.goBack())
  }
}
