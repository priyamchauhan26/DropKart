import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidemenu1Component } from './sidemenu1.component';

describe('Sidemenu1Component', () => {
  let component: Sidemenu1Component;
  let fixture: ComponentFixture<Sidemenu1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sidemenu1Component]
    });
    fixture = TestBed.createComponent(Sidemenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
