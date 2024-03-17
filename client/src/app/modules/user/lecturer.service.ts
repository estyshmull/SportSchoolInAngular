import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {
  public isLecturer=false;
  public lecturerId=-1
  constructor(private http:HttpClient) {   }

  public getLecturerByNameAndPassword(lecturer:User)
  {
    return this.http.post<User>('https://localhost:7150/api/Lecturer/loginLecturer',lecturer)
  }
  public getLecturerById(id:number)
  {
    return this.http.get<User>(`https://localhost:7150/api/Lecturer/${id}`)
  }
}
