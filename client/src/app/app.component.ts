import { Component, OnInit } from '@angular/core'

import { GameService } from './services/game.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ GameService ]
})
export class AppComponent {
  title = 'Steam App';
  city = 'Seattle';
}
