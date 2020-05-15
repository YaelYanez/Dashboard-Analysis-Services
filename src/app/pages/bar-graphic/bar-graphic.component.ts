import { Component } from '@angular/core';

@Component({
  selector: 'bar-graphic-page',
  templateUrl: './bar-graphic.component.html',
  styleUrls: ['./bar-graphic.component.scss'],
})
export class BarGraphicPage {
  dimensions: object[] = [
    { value: 1, label: 'Cliente' },
    { value: 2, label: 'Empleados' },
  ];

  dimensionsRes: object[] = [
    { value: 1, label: 'Yael' },
    { value: 2, label: 'Derek' },
    { value: 3, label: 'Victor' },
    { value: 4, label: 'Franco' },
  ];

  years: object[] = [
    { value: 1, label: 1997 },
    { value: 2, label: 1998 },
    { value: 3, label: 1999 },
  ];

  months: object[] = [
    { value: 1, label: 'Jan' },
    { value: 2, label: 'Feb' },
    { value: 3, label: 'Mar' },
  ];

  getSelected(mensaje) {
    console.log(mensaje);
  }
}
