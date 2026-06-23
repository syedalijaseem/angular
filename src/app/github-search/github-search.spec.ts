import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearch } from './github-search';

describe('GithubSearch', () => {
  let component: GithubSearch;
  let fixture: ComponentFixture<GithubSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
