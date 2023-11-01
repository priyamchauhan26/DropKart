import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomereditAddressComponent } from './customeredit-address.component';

describe('CustomereditAddressComponent', () => {
  let component: CustomereditAddressComponent;
  let fixture: ComponentFixture<CustomereditAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomereditAddressComponent]
    });
    fixture = TestBed.createComponent(CustomereditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
