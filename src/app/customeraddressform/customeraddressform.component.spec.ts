import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeraddressformComponent } from './customeraddressform.component';

describe('CustomeraddressformComponent', () => {
  let component: CustomeraddressformComponent;
  let fixture: ComponentFixture<CustomeraddressformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomeraddressformComponent]
    });
    fixture = TestBed.createComponent(CustomeraddressformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
