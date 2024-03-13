import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course } from './course.model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {}

  public getAllCourses():Observable<Course[]>{
    return this.http.get<Course[]>('https://localhost:7150/api/Course')
  }

  public getCourseById(id:number):Observable<Course>
  {
    return this.http.get<Course>(`https://localhost:7150/api/Course/${id}`)
  }
  public addCourse(c:Course):Observable<any>{
    return this.http.post(`https://localhost:7150/api/Course`,c)
  }
}