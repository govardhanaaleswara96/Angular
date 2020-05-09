import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissonComponent } from './misson.component';

describe('MissonComponent', () => {
  let component: MissonComponent;
  let fixture: ComponentFixture<MissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
