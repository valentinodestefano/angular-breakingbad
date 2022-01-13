import { Component, OnInit } from '@angular/core';


import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  characters: Character[] = [];

  constructor(private characterService: CharactersService) { }

  ngOnInit() {
    this.characterService.getCharacterCarousel().
      subscribe(
        res => {
          this.characters = res;
        },
        err => console.log(err)
      )
  }

}
