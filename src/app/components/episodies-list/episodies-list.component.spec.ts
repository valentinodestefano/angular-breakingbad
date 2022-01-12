import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodiesListComponent } from './episodies-list.component';

describe('EpisodiesListComponent', () => {
  let component: EpisodiesListComponent;
  let fixture: ComponentFixture<EpisodiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
