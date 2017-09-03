import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module'

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard.component'
import { GamesComponent } from './games.component'
import { GameDetailComponent } from './game-detail.component'
import { GameService } from './services/game.service'
import { GameSearchComponent } from './game-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    GamesComponent,
    GameDetailComponent,
    GameSearchComponent,
  ],
  providers: [ GameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
