import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-departmentdialog',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './add-departmentdialog.component.html',
  styleUrl: './add-departmentdialog.component.scss',
})
export class AddDepartmentdialogComponent {
  departmentName: any;

  constructor(public dialogRef: MatDialogRef<AddDepartmentdialogComponent>  ,
    @Inject(MAT_DIALOG_DATA) public data: { name?: any }
) {
  if (data && data.name) {
    this.departmentName = data.name;
  }
}
  onNoClick(): void {
    this.dialogRef.close();
  }
  onYesClick(){
    this.dialogRef.close(this.departmentName);
  }
}
