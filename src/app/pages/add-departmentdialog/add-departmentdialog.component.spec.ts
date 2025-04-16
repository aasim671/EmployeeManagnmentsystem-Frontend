import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentdialogComponent } from './add-departmentdialog.component';

describe('AddDepartmentdialogComponent', () => {
  let component: AddDepartmentdialogComponent;
  let fixture: ComponentFixture<AddDepartmentdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDepartmentdialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDepartmentdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
