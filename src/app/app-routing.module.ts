import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterSpecificComponent } from './components/character-specific/character-specific.component';
import { EpisodiesListComponent } from './components/episodies-list/episodies-list.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';

const routes: Routes = [
  {
    path: 'listcharacters',
    component: CharactersListComponent
  },
  {
    path: 'character/:char_id',
    component: CharacterSpecificComponent
  },
  {
    path: 'episodies',
    component: EpisodiesListComponent
  },
  {
    path: '',
    component: HomeComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
