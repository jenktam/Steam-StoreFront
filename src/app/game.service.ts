import 'rxjs/add/operator/toPromise'
import { Injectable } from '@angular/core'
import { Headers, Http} from '@angular/http'

import { Game } from './game'

@Injectable()
export class GameService{
  private gamesUrl = 'api/games' //url to web api**
  private headers = new Headers({'Content-Type': 'application/json'})

  constructor(private http: Http) {}

  //must anticipate HTTP failures, so always add error handling
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error);
  }

  getGames(): Promise<Game[]> {
    return this.http
    .get(this.gamesUrl)
    .toPromise() //comes from rxJS library
    .then( response => response.json().data as Game []) //returns resolved promise value of games
    .catch(this.handleError)
  }

  getGamesSlowly(): Promise<Game[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getGames()), 2000)
    })
  }


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
