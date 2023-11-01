import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBrandsComponent } from './filter-brands.component';

describe('FilterBrandsComponent', () => {
  let component: FilterBrandsComponent;
  let fixture: ComponentFixture<FilterBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterBrandsComponent]
    });
    fixture = TestBed.createComponent(FilterBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
