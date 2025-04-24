import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IDepartment } from '../types/departmetn';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
http = inject(HttpClient)
apiUrl= 'https://localhost:7284/'
  constructor() { }
  getDepartments(){
    return this.http.get<IDepartment>(this.apiUrl + 'api/Department');
  }

  addDepartment(name:any){
   return this.http.post<IDepartment>(this.apiUrl + 'api/Department', {
    name:name
   } )
  }


  updateDepartment(department: any): Observable<any> {
    return this.http.put(`${this.apiUrl}api/Department/${department.id}`, department);
  }
  
    deleteDepartment(id: string) {
      return this.http.delete<IDepartment>(`${this.apiUrl}api/Department/${id}`);
    }
}
