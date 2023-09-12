import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, from, lastValueFrom } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes("uc.gateway.dev")) {
      return from(this.authService.getAccessToken().then(token => {
          const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
          const authReq = request.clone({headers});
          return lastValueFrom(next.handle(authReq))
      }))
    }
    return next.handle(request);
  }
}
