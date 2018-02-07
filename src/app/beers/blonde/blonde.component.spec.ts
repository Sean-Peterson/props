import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlondeComponent } from './blonde.component';

describe('BlondeComponent', () => {
  let component: BlondeComponent;
  let fixture: ComponentFixture<BlondeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlondeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlondeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
