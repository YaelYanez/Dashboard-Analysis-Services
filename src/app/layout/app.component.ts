import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cube-dashboard-Parcial2do';

  async ngOnInit() {
    const res = await axios.get('/test');
    console.log(res);
  }
}
