import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { UserLogin } from './user-login';
import { UserRegister } from './user-register';

@Injectable({
  providedIn: 'root'
})
export  class AuthServiceService {


  get token(){
    return localStorage.getItem('auth')
  }
  constructor(private http: HttpClient) {
  }

  public login(user: UserLogin) {

    return this.http.post<UserLogin>('http://localhost:9090/api/auth/login', user).pipe(
      tap(res => {
        let token: any = res;
        localStorage.setItem('auth', token.jwt)
      })
    )

  }
  public register(user: UserRegister) {
    return this.http.post<UserRegister>('http://localhost:9090/api/auth/register', user).pipe(
      tap(res => {
        let token: any = res;
        localStorage.setItem('auth', token.jwt)
      })
    );
  }
}
