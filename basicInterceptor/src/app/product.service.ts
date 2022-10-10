import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'https://alta-shop.herokuapp.com/api/hello';
  urlLogin = 'https://alta-shop.herokuapp.com/api/auth/login';
  user = {
    email: 'someone@mail.com',
    password: '123123',
  };
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  constructor(private http: HttpClient) {}
  getConfig() {
    return this.http.get(this.url);
  }
  postConfig() {
    console.log('post config');
    const result = this.http.post(this.urlLogin, this.user);
    console.log('result', this.user);
    return this.http
      .post(this.urlLogin, this.user, this.httpOptions)
      .subscribe((res) => {
        console.log(res);
      });
    // .pipe(catchError(this.handleError('user', this.user)));
  }
  handleError(
    arg0: string,
    user: { email: string; password: string }
  ): (
    err: any,
    caught: Observable<Object>
  ) => import('rxjs').ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
}
