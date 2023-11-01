import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeraddressListComponent } from './customeraddress-list.component';

describe('CustomeraddressListComponent', () => {
  let component: CustomeraddressListComponent;
  let fixture: ComponentFixture<CustomeraddressListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomeraddressListComponent]
    });
    fixture = TestBed.createComponent(CustomeraddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
