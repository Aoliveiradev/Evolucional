import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreesTableComponent } from './degrees-table.component';

describe('DegreesTableComponent', () => {
  let component: DegreesTableComponent;
  let fixture: ComponentFixture<DegreesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
