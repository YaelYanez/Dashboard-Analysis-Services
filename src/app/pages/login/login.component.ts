import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private login: AuthService, private router: Router) {}

  msg1: string;

  ngOnInit(): void {
    if(localStorage.getItem('token').length != 0){
      if(this.login.checkLoginStatus()){
        this.router.navigate(['/dashboard'])
      }else{
        localStorage.setItem('loginStatus', 'false');
        localStorage.setItem('token', '');
      } 
    }
  }

  async Login(username, password) {
    const body: any = { username, password };
    const response: object = await this.login.login(body);

    //@ts-ignore
    const { ok } = response;
    //@ts-ignore
    const{error} = response;

    if (ok) {
      localStorage.setItem('token', response[Object.keys(response)[2]]);
      const decoded = jwt_decode(localStorage.getItem('token'));
      localStorage.setItem('loginStatus', 'true');
      this.router.navigate(['/dashboard']);
      
    } else {
      //@ts-ignore
      this.msg1 = error.msg;
    }
  }
}
