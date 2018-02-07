import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourKingsComponent } from './four-kings.component';

describe('FourKingsComponent', () => {
  let component: FourKingsComponent;
  let fixture: ComponentFixture<FourKingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourKingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourKingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
