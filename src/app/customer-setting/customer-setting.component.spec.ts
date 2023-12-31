import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSettingComponent } from './customer-setting.component';

describe('CustomerSettingComponent', () => {
  let component: CustomerSettingComponent;
  let fixture: ComponentFixture<CustomerSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerSettingComponent]
    });
    fixture = TestBed.createComponent(CustomerSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
