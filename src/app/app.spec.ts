import { TestBed } from '@angular/core/testing';
import { App } from './app';

// create a test suite (group of test cases)
describe('App', () => {
  // run before each test case
  // used to initialize common setup for testing
  beforeEach(async () => {
    // TestBed creates and configures the testing environment
    // configureTestingModule takes in a configuration for the test case requirements
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents(); // async
  });

  // create single test case
  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, inClass');
  });
});
