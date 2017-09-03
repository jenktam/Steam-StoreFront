import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './dashboard.component'
import { GamesComponent } from './games.component'
import { GameDetailComponent } from './game-detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: GameDetailComponent },
  { path: 'games',      component: GamesComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
