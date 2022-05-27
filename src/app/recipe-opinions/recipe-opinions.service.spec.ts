import { TestBed } from '@angular/core/testing';

import { RecipeOpinionsService } from './recipe-opinions.service';

describe('RecipeOpinionsService', () => {
  let service: RecipeOpinionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeOpinionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
