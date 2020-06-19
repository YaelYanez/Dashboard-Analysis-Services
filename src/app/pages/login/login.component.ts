import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private login: AuthService) {}

  msg1: string;

  ngOnInit(): void {
    localStorage.setItem('loginStatus', 'false');
    localStorage.setItem('token', '');
  }

  async Login(username, password) {
    const body: any = { username, password };
    const response: object = await this.login.login(body);

    //@ts-ignore
    const { ok } = response;

    if (ok) {
      localStorage.setItem('token', response[Object.keys(response)[2]]);
      const decoded = jwt_decode(localStorage.getItem('token'));
      console.log(decoded);
      localStorage.setItem('loginStatus', 'true');
      location.href = 'dashboard';
    } else {
      //@ts-ignore
      const msg: string = response.error;
      this.msg1 = msg;
    }
  }
}
