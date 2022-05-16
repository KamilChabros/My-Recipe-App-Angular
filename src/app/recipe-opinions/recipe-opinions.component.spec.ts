import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeOpinionsComponent } from './recipe-opinions.component';

describe('RecipeOpinionsComponent', () => {
  let component: RecipeOpinionsComponent;
  let fixture: ComponentFixture<RecipeOpinionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeOpinionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeOpinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
