import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IDepartment } from '../types/departmetn';

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


  updateDepartment(name: string, id: string) {
    return this.http.put<IDepartment>(this.apiUrl + 'api/Department' + id , {
      name:name
     } )
    }
    deleteDepartment(id: string) {
      return this.http.delete<IDepartment>(`${this.apiUrl}api/Department/${id}`);
    }
}
