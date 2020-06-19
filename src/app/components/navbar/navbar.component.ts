import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public _router:Router) {}
  name : string = "";
  ngOnInit(): void {
  }

  Logout(){
    localStorage.setItem('token','');
    localStorage.setItem('loginStatus', 'false');
    location.href = ('login')
  }
}
