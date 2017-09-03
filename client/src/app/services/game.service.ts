import 'rxjs/add/operator/toPromise'
import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'

import { Game } from '../game'

@Injectable()
export class GameService{
  private gamesUrl = 'api/games'; //url to web api**
  private headers = new Headers();

  // private header = {}
  // // headers.append('user-key', '7ee53a24fee43bb2da17a2658aeb6ce0')
  // // private headers = new Headers({'Content-Type': 'application/json', 'user-key': '7ee53a24fee43bb2da17a2658aeb6ce0', 'Accept': 'application/json'})

  constructor(private http: Http) {
    this.headers.append('user-key', '7ee53a24fee43bb2da17a2658aeb6ce0');
  }

  //must anticipate HTTP failures, so always add error handling
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error)
    return Promise.reject(error.message || error);
  }

  getGamesTest(): void {
    let headers2 = new Headers(
      {
        'user-key': '7ee53a24fee43bb2da17a2658aeb6ce0',
        'Accept': 'application/json'
      }
    );
    let options = new RequestOptions({
      headers: headers2
    });
    this.http
    .get('https://api-2445582011268.apicast.io/games?fields=name,summary,url,release_dates,popularity,rating,total_rating,total_rating_count,genres,cover&order=popularity:desc', options)
    .toPromise() //comes from rxJS library
    .then( response => {
      console.log("response: " + response.text())
    }) //returns resolved promise value of games
    .catch(this.handleError)
  }

  getGames(): Promise<Game[]> {
    // let myParams = new URLSearchParams();
    // myParams.append('id', gameId)
    let headers = new Headers({'test': 'ha ha'});
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
    .get('https://api-2445582011268.apicast.io/games?fields=name,summary,url,release_dates,popularity,rating,total_rating,total_rating_count,genres,cover&order=popularity:desc', options)
    .toPromise() //comes from rxJS library
    .then( response => {
      console.log("response: " + response.text())
    }) //returns resolved promise value of games
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
