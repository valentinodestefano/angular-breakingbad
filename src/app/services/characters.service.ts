import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  BASE_URL: string = 'https://www.breakingbadapi.com';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]>{
    return this.http.get<Character[]>(`${this.BASE_URL}/api/characters`);
  }

  getCharacter(char_id: number): Observable<Character[]>{
    return this.http.get<Character[]>(`${this.BASE_URL}/api/characters/${char_id}`);
  }
  
  getCharacterCarousel(): Observable<Character[]>{
    return this.http.get<Character[]>(`${this.BASE_URL}/api/characters?limit=1&offset=0`);
  }
}
