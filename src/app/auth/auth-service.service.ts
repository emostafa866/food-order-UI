import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { UserLogin } from './user-login';
import { UserRegister } from './user-register';

@Injectable({
  providedIn: 'root'
})
export  class AuthServiceService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);//msh fahm deh ask Google
  loggedIn = this.isLoggedIn.asObservable();//msh fahm

  get token(){
    return localStorage.getItem('auth')
  }
  constructor(private http: HttpClient) {
    this.isLoggedIn.next(!!this.token)
  }

  public login(user: UserLogin) {

    return this.http.post<UserLogin>('http://localhost:9091/api/auth/login', user).pipe(
      tap(res => {
        let token: any = res;
        this.isLoggedIn.next(true)
        localStorage.setItem('auth', token.jwt)
      })
    )

  }
  public register(user: UserRegister) {
    return this.http.post<UserRegister>('http://localhost:9091/api/auth/register', user).pipe(
      tap(res => {
        let token: any = res;
        this.isLoggedIn.next(true)
        localStorage.setItem('auth', token.jwt)
      })
    );
  }
}
