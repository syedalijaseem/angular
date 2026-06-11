import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleIntro } from './lifecycle-intro';

describe('LifecycleIntro', () => {
  let component: LifecycleIntro;
  let fixture: ComponentFixture<LifecycleIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleIntro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleIntro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
