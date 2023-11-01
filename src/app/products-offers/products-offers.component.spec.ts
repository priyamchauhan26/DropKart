import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOffersComponent } from './products-offers.component';

describe('ProductsOffersComponent', () => {
  let component: ProductsOffersComponent;
  let fixture: ComponentFixture<ProductsOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsOffersComponent]
    });
    fixture = TestBed.createComponent(ProductsOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
