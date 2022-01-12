import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Episodie } from '../interfaces/episodie';


@Injectable({
  providedIn: 'root'
})
export class EpisodiesService {

  BASE_URL: string = 'https://www.breakingbadapi.com';

  constructor(private http: HttpClient) { }

  getEpisodies(): Observable<Episodie[]>{
    return this.http.get<Episodie[]>(`${this.BASE_URL}/api/episodes`);
  }

  
}
