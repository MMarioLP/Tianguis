import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string;
  private url2:string;

  constructor(private http:HttpClient,    private jwtHelper: JwtHelperService) { 
    this.url=environment.endpoint;
    this.url2='/api/users';
 
    
  }
  sigIn(user:usuario):Observable<any>{

      return this.http.post(`${this.url}${this.url2}`,user);
  }

  login(user:usuario):Observable<string>{
    return this.http.post<string>(`${this.url}${this.url2}/login`,user);
  

  }

  isAuth():boolean{
    const token = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }
  
 
}

