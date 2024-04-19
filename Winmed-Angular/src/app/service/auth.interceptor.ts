import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.authService.authenticatedUser?.jwt
    
    if(token){
      const reqAuth = request.clone(
        {
          headers : new HttpHeaders({"Authorization":`Bearer ${token}`})
        }
      )
      return next.handle(reqAuth);
    }
    return next.handle(request);
  }
}
