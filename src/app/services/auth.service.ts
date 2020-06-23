import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as jwt_decode from 'jwt-decode';

const URL_API = environment.API.EndPoint.Login;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login = (body: { username: string; password: string }): Promise<object> => {
    return new Promise((resolve) => {
      this.http
        .post(`${URL_API}login`, body)
        .toPromise()
        .then((res: object) => resolve(res))
        .catch((res: object) => resolve(res));
    });
  };

  checkLoginStatus(): boolean {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    var loginStatus = localStorage.getItem('loginStatus');

    if (loginStatus == 'true') {
      //@ts-ignore
      if (decoded.exp == undefined) {
        return false;
      }

      const date = new Date(0);
      //@ts-ignore
      let tokenExpDate = date.setUTCSeconds(decoded.exp);

      if (tokenExpDate.valueOf() > new Date().valueOf()) {
        return true;
      }
    }
    return false;
  }
}
