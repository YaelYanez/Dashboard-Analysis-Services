import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cube-dashboard-Parcial2do';
  loginStatus: boolean = (localStorage.getItem('loginStatus') == "true") ? true : false;
}


