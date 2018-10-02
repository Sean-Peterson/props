import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaproomComponent } from './taproom.component';

describe('TaproomComponent', () => {
  let component: TaproomComponent;
  let fixture: ComponentFixture<TaproomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaproomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaproomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
