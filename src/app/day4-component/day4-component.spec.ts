import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4Component } from './day4-component';
import { FetchDataService } from './Services/fetch-data-service';
import { of } from 'rxjs';
import { TodoItem } from './todo.interface';

describe('Day4Component', () => {
  let component: Day4Component;
  let fixture: ComponentFixture<Day4Component>;
  let mockService: jasmine.SpyObj<FetchDataService>;

  beforeEach(async () => {
    // creating the mock obj with fake methods
    mockService = jasmine.createSpyObj('FetchDataService', ['getTodos'], {
      myObs: of(1),
    });
    // specify the spy to return a mock value
    mockService.getTodos.and.returnValue(
      of(<TodoItem[]>[{ title: 'Hello', body: 'world', id: 0, userId: 1 }]),
    );
    await TestBed.configureTestingModule({
      imports: [Day4Component],
      // replace real service with mock instance
      providers: [{ provide: FetchDataService, useValue: mockService }],
    }).compileComponents();

    fixture = TestBed.createComponent(Day4Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service and set the todos signal on Init', () => {
    // triggers change detection to invoke  ngOnInit()
    fixture.detectChanges();
    expect(mockService.getTodos).toHaveBeenCalled();
    expect(component.todos()).toEqual([{ title: 'Hello', body: 'world', id: 0, userId: 1 }]);
  });
});
