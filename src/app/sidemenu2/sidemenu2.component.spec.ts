import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidemenu2Component } from './sidemenu2.component';

describe('Sidemenu2Component', () => {
  let component: Sidemenu2Component;
  let fixture: ComponentFixture<Sidemenu2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sidemenu2Component]
    });
    fixture = TestBed.createComponent(Sidemenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
