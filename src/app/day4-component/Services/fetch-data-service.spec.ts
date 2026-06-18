import { TestBed } from '@angular/core/testing';

import { FetchDataService } from './fetch-data-service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('FetchDataService', () => {
  let service: FetchDataService;
  // A tool to mock Http requests without the actual network call
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(FetchDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch todos with GET', () => {
    const mockData = [{ title: 'Hello', body: 'world', id: 0, userId: 1 }];
    service.getTodos().subscribe((data) => {
      expect(data).toEqual(mockData);
    });
  });
});
