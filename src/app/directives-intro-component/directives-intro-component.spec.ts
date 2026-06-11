import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesIntroComponent } from './directives-intro-component';

describe('DirectivesIntroComponent', () => {
  let component: DirectivesIntroComponent;
  let fixture: ComponentFixture<DirectivesIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesIntroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
