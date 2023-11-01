import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductimagesComponent } from './productimages.component';

describe('ProductimagesComponent', () => {
  let component: ProductimagesComponent;
  let fixture: ComponentFixture<ProductimagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductimagesComponent]
    });
    fixture = TestBed.createComponent(ProductimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
