import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClassesPageComponent } from './edit-classes-page.component';

describe('EditClassesPageComponent', () => {
  let component: EditClassesPageComponent;
  let fixture: ComponentFixture<EditClassesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditClassesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClassesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
