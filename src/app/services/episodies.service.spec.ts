import { TestBed } from '@angular/core/testing';

import { EpisodiesService } from './episodies.service';

describe('EpisodiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpisodiesService = TestBed.get(EpisodiesService);
    expect(service).toBeTruthy();
  });
});
