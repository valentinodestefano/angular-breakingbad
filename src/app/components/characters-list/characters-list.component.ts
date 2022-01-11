import { Component, OnInit } from '@angular/core';

import { CharactersService } from 'src/app/services/characters.service';

import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: Character[] = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(){
    this.charactersService.getCharacters()
    .subscribe(
      res => {
        this.characters = res;
      },
      err => console.log(err)
    )
  }

}
