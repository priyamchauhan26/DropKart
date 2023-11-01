import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltercategoriesComponent } from './filtercategories.component';

describe('FiltercategoriesComponent', () => {
  let component: FiltercategoriesComponent;
  let fixture: ComponentFixture<FiltercategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltercategoriesComponent]
    });
    fixture = TestBed.createComponent(FiltercategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
