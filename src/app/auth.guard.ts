import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private router: Router){}
  
  canActivate():boolean{
    if(localStorage.getItem('token').length != 0){
      if(!this._authService.checkLoginStatus()){
        this.router.navigate(['login']);
        return false;
      }else{
        return true;
      }
    }else{
      this.router.navigate(['login']);
      return false;
    }    
  }
}
