import { TestBed } from '@angular/core/testing';

import { BookListService } from './book-list.service';

describe('UserListService', () => {
  let service: BookListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});