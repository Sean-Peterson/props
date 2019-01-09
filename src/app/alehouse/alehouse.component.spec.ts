import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlehouseComponent } from './alehouse.component';

describe('AlehouseComponent', () => {
  let component: AlehouseComponent;
  let fixture: ComponentFixture<AlehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
