import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterSpecificComponent } from './components/character-specific/character-specific.component';

const routes: Routes = [
  {
    path: 'listcharacters',
    component: CharactersListComponent
  },
  {
    path: 'character/:char_id',
    component: CharacterSpecificComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
