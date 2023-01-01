import { Injectable,Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth/auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let lodinService = this.injector.get(AuthServiceService)
    if('auth' in localStorage)
    { let tokenizedReq = req.clone({
      setHeaders:{
        Authorization:'Bearer '+ lodinService.token
      }
    })
    return next.handle(tokenizedReq)
  }
  // console.log(req);
  
   return next.handle(req) 
  }
}