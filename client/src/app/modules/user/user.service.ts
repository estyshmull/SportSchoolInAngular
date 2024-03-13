import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }
  public getUserFromServer(): Observable<User[]> {
    return this.http.get<User[]>('https://localhost:7150/api/User')
  }

  public getUserByNameAndPassword(user: User): Observable<User> {
    console.log("getUserByNameAndPassword function");
    console.log(user)
    return this.http.post<User>('https://localhost:7150/api/User/login', user);
  }

  public save(user: User): Observable<any> {
    console.log("saveFunction")
    return this.http.post('https://localhost:7150/api/User', user)

  }
  public logOut() {

    sessionStorage.clear();
  }


}
