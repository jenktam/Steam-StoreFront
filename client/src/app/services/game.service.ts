import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'

import { Game } from '../game'

@Injectable()
export class GameService{
  private gamesUrl = 'api/games'; //url to web api**
  private headers = new Headers();

  constructor(private http: Http) {}

  //must anticipate HTTP failures, so always add error handling
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error);
  }

  getGames() {
    return this.http
    .get('/api/games')
    .map( res => {
      // console.log("res from game.service!****", res);
      console.log("res.json() from game.service!****", JSON.stringify(res.json(), null, 2));
      res.json();
    })
    .catch(this.handleError)
  }

  // getGames() {
  //   return this.http
  //   .get('/api/games')
  //   .toPromise()
  //   .then( res => {
  //     console.log("res from game.service!****", res);
  //     console.log("res.json() from game.service!****", JSON.stringify(res.json(), null, 2));
  //     res.json() as Game[]})
  // }

  // getGamesSlowly(): Promise<Game[]> {
  //   return new Promise(resolve => {
  //     setTimeout(() => resolve(this.getGames()), 2000)
  //   })
  // }


  getGame(id: number): Promise<Game> {
    const url = `${this.gamesUrl}/${id}`

    return this.http
    .get(url)
    .toPromise()
    .then( response => response.json().data as Game)
    .catch(this.handleError)
  }

  update(game: Game): Promise<Game> {
    const url = `${this.gamesUrl}/${game.id}`

    return this.http
    .put(url, JSON.stringify(game), { headers: this.headers })
    .toPromise()
    .then( () => game)
    .catch(this.handleError)
  }

  create(name: string): Promise<Game> {
    return this.http
    .post(this.gamesUrl, JSON.stringify({ name: name }), { headers: this.headers })
    .toPromise()
    .then( response => response.json().data as Game )
    .catch(this.handleError)
  }

  delete(id: number): Promise<Game> {
    const url = `${this.gamesUrl}/${id}`
    return this.http
    .delete(url, { headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError)
  }

}
