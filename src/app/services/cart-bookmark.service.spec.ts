import { TestBed } from '@angular/core/testing';

import { CartBookmarkService } from './cart-bookmark.service';

describe('CartBookmarkService', () => {
  let service: CartBookmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartBookmarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
