import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL_API = environment.API.EndPoint.Northwind;

@Injectable({
  providedIn: 'root',
})
export class NorthwindService {
  constructor(private http: HttpClient) {}

  getDimensions = (): Promise<object[]> => {
    return new Promise((resolve) => {
      this.http
        .get(`${URL_API}GetDimensions`)
        .toPromise()
        .then((res: object[]) => resolve(res));
    });
  };

  getDimensionYears = (): Promise<object[]> => {
    return new Promise((resolve) => {
      this.http
        .get(`${URL_API}GetDimensionYears`)
        .toPromise()
        .then((res: object[]) => resolve(res));
    });
  };

  getDimensionYearsMonths = (): Promise<object[]> => {
    return new Promise((resolve) => {
      this.http
        .get(`${URL_API}GetDimensionYearsMonths`)
        .toPromise()
        .then((res: object[]) => resolve(res));
    });
  };

  getDimensionItems = (body: string[]): Promise<object[]> => {
    return new Promise((resolve) => {
      this.http
        .post(`${URL_API}GetDimensionsItems`, body)
        .toPromise()
        .then((res: object[]) => resolve(res));
    });
  };

  getTopSales = (body: string[]): Promise<object[]> => {
    return new Promise((resolve) => {
      this.http
        .post(`${URL_API}GetTop5Pie`, body)
        .toPromise()
        .then((res: object[]) => resolve(res));
    });
  };

  getHistogram = (body: any): Promise<object[]> => {
    return new Promise((resolve) => {
      this.http
        .post(`${URL_API}GetHistogram`, body)
        .toPromise()
        .then((res: object[]) => resolve(res));
    });
  };
}
