import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSpecificComponent } from './character-specific.component';

describe('CharacterSpecificComponent', () => {
  let component: CharacterSpecificComponent;
  let fixture: ComponentFixture<CharacterSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
