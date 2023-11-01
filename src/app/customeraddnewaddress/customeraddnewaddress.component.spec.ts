import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeraddnewaddressComponent } from './customeraddnewaddress.component';

describe('CustomeraddnewaddressComponent', () => {
  let component: CustomeraddnewaddressComponent;
  let fixture: ComponentFixture<CustomeraddnewaddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomeraddnewaddressComponent]
    });
    fixture = TestBed.createComponent(CustomeraddnewaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
