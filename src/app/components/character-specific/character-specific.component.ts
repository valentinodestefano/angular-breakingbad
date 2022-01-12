import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character';

import { CharactersService } from 'src/app/services/characters.service';



@Component({
  selector: 'app-character-specific',
  templateUrl: './character-specific.component.html',
  styleUrls: ['./character-specific.component.css']
})
export class CharacterSpecificComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private characterService: CharactersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
      this.characterService.getCharacter(params.char_id)
      .subscribe(
        res => {
          this.characters = res;
        }
      )
  }

  

}
