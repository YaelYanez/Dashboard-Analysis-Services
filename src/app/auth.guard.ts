import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router){}
  
  canActivate():boolean{
    if(this._authService.checkLoginStatus()){
      return true
    }else{
      localStorage.setItem('token',"")
      localStorage.setItem('loginStatus',"false")
      location.href = ('login');
    }
  }
}