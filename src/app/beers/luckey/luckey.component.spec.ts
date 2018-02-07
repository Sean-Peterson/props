import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckeyComponent } from './luckey.component';

describe('LuckeyComponent', () => {
  let component: LuckeyComponent;
  let fixture: ComponentFixture<LuckeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
