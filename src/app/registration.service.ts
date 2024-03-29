import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient) { }

  public loginUserFromRemote(user :User):Observable<any>{
    return this.http.post("http://localhost:8080/register/login",user)
  }

   public registerUserFromRemote(user :User):Observable<any>{
    return this.http.post("http://localhost:8080/register/user",user)
  }
}
