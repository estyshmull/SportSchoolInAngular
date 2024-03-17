import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
    public getAllCategory():Observable<Category[]>{
      return this.http.get<Category[]>('https://localhost:7150/api/Category')
    }
    
    public getCategoryByName(name:string):Observable<Category>{
      return this.http.get<Category>(`https://localhost:7150/api/Category/ByName/${name}`)
    }
    
    public getCategoryById(id:number):Observable<Category>{
      return this.http.get<Category>(`https://localhost:7150/api/Category/${id}`)
    }

}
