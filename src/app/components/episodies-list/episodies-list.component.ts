import { Component, OnInit } from '@angular/core';

import { EpisodiesService } from 'src/app/services/episodies.service';

import { Episodie } from 'src/app/interfaces/episodie';

@Component({
  selector: 'app-episodies-list',
  templateUrl: './episodies-list.component.html',
  styleUrls: ['./episodies-list.component.css']
})
export class EpisodiesListComponent implements OnInit {

  episodies: Episodie[] = [];

  constructor(private episodiesServices: EpisodiesService) { }

  ngOnInit() {
    this.getEpisodies();
  }

  getEpisodies(){
    this.episodiesServices.getEpisodies()
    .subscribe(
      res => {
        this.episodies = res;
      },
      err => console.log(err)
    )
  }

}
