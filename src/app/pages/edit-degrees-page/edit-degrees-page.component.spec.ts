import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDegreesPageComponent } from './edit-degrees-page.component';

describe('EditDegreesPageComponent', () => {
  let component: EditDegreesPageComponent;
  let fixture: ComponentFixture<EditDegreesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDegreesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDegreesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
