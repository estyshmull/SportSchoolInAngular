import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {
  public isLucturer=false;
  constructor(private http:HttpClient) {   }

  public getLecturerByNameAndPassword(lecturer:User)
  {
    return this.http.post<User>('https://localhost:7150/api/Lecturer/loginLecturer',lecturer)
  }
}
