import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtRequest } from '../_model/JwtRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url : string = 'http://localhost:8080/api/auth/signin';

  constructor(private http : HttpClient) { }

  login(jwtRquest : JwtRequest){
    return this.http.post<any>(this.url,jwtRquest, {
      headers : new HttpHeaders().set('No-Auth', 'True')
    });
  }

  isLogged(){
    let jwt  = sessionStorage.getItem('access_token');
    if(jwt!=null){
      return true
    }
    return false
  }

  logout(){
      sessionStorage.clear();
  }

  getToken(){
    let jwt  = sessionStorage.getItem('access_token');
  }

}
