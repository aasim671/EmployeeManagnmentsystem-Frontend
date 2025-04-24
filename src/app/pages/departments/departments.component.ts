import { Component, ViewChild, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpService } from '../../services/http.service';
import { IDepartment } from '../../types/departmetn';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddDepartmentdialogComponent } from '../add-departmentdialog/add-departmentdialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
  ],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
})
export class DepartmentsComponent {
  httpService = inject(HttpService);
  displayedColumns: string[] = ['id', 'name', 'action'];
  department: string = '';
  dataSource = new MatTableDataSource<IDepartment>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.getDepartments();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getDepartments() {
    this.httpService.getDepartments().subscribe((result) => {
      this.dataSource.data = Array.isArray(result) ? result : [];
    });
  }

  addDepartment() {
    const dialogRef = this.dialog.open(AddDepartmentdialogComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.httpService.addDepartment(result).subscribe(() => {
          this.getDepartments(); // Refresh after adding
        });
      }
    });
  }

  editDepartment(department: any) {
    const dialogRef = this.dialog.open(AddDepartmentdialogComponent, {
      width: '300px',
      data: { name: department.name }
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result && result !== department.name) {
        const updatedDepartment = {
          id: department.id,
          name: result
        };

        this.httpService.updateDepartment(updatedDepartment).subscribe(() => {
          this.getDepartments();
        });
      }
    });
  }

  deleteDepartment(id: any) {
    this.httpService.deleteDepartment(id).subscribe(() => {
      this.getDepartments();
    });
  }
}

