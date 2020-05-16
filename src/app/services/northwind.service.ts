import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL_API = 'environment.API.EndPoint.Northwind';

@Injectable({
  providedIn: 'root',
})
export class NorthwindService {
  constructor() {}

  getDimensions() {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve([
            { value: 1, label: 'Cliente' },
            { value: 2, label: 'Empleados' },
          ]),
        1000
      );
    });
  }

  getDimensionItems = (dimension: string) => [
    { value: 1, label: 'SciFi', sales: 30 },
    { value: 2, label: 'Drama', sales: 50 },
    { value: 3, label: 'Comedy', sales: 20 },
  ];

  getDimensionYears = (dimension: string) => [
    { value: 1, label: 1997 },
    { value: 2, label: 1998 },
    { value: 3, label: 1999 },
  ];

  getDimensionYearsMonths = (dimension: string, year: number) => [
    { value: 1, label: 'Jan' },
    { value: 2, label: 'Feb' },
    { value: 3, label: 'Mar' },
  ];

  // getTop5 = (dimension: string, year: number, month: number) => {
  //   this.http.post(`${URL_API}elMetodo/`, {
  //     dimension: 'Cliente',
  //     year: 1999,
  //     month: 2,
  //   });
  // };
}
