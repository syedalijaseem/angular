import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsSearch } from './star-wars-search';

describe('StarWarsSearch', () => {
  let component: StarWarsSearch;
  let fixture: ComponentFixture<StarWarsSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarWarsSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarWarsSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
