import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterSpecificComponent } from './components/character-specific/character-specific.component';
import { EpisodiesListComponent } from './components/episodies-list/episodies-list.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharactersListComponent,
    CharacterSpecificComponent,
    EpisodiesListComponent,
    HomeComponentComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
