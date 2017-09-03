import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'

import { Game } from '../game'

@Injectable()
export class GameService{
  private gamesUrl = 'api/games'; //url to web api**
  private headers = new Headers();

  constructor(private http: Http) {}

  private handleError(error:any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  private extractData(res:Response) {
    let body = res.json();
    console.log("body in game service", body)
    return body || [];
  }

  // originally didn't work because needed to send both handleError and getGames as either a Promise or an Observable. Since handleError was still written as a Promise, there was an inconsistency. If it is a promise, need to show a promise in other files where the link is called
  getGames(): Observable<Game[]> {
    return this.http
    .get('/api/games')
    .map(this.extractData)
    .catch(this.handleError)
  }

  // getGames(): Observable<Game[]> {
  //   return this.http
  //   .get('/api/games')
  //   .map( res => {
  //     console.log("res from game.service!****", res);
  //     console.log("res.json() from game.service!****", JSON.stringify(res.json(), null, 2));
  //     res.json()})
  //   .catch(this.handleError)
  // }

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

  getGame(id: number): Observable<Game> {
    const url = `${this.gamesUrl}/${id}`
    return this.http
    .get(url)
    .map( response => {
      console.log("response getGame", response)
      response.json().data as Game})
    .catch(this.handleError)
  }

  // getGame(id: number): Promise<Game> {
  //   const url = `${this.gamesUrl}/${id}`

  //   return this.http
  //   .get(url)
  //   .toPromise()
  //   .then( response => response.json().data as Game)
  //   .catch(this.handleError)
  // }

  // update(game: Game): Promise<Game> {
  //   const url = `${this.gamesUrl}/${game.id}`

  //   return this.http
  //   .put(url, JSON.stringify(game), { headers: this.headers })
  //   .toPromise()
  //   .then( () => game)
  //   .catch(this.handleError)
  // }

  // create(name: string): Promise<Game> {
  //   return this.http
  //   .post(this.gamesUrl, JSON.stringify({ name: name }), { headers: this.headers })
  //   .toPromise()
  //   .then( response => response.json().data as Game )
  //   .catch(this.handleError)
  // }

  // delete(id: number): Promise<Game> {
  //   const url = `${this.gamesUrl}/${id}`
  //   return this.http
  //   .delete(url, { headers: this.headers})
  //   .toPromise()
  //   .then(() => null)
  //   .catch(this.handleError)
  // }

}
