import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { NorthwindService } from 'src/app/services/northwind.service';
import * as helpers from '../../helpers/helpers';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'top-sales-page',
  templateUrl: './top-sales.component.html',
  styleUrls: ['./top-sales.component.scss'],
})
export class TopSalesPage implements OnInit {
  constructor(private north: NorthwindService, private router: Router) {}

  helpers = helpers;

  // Selects Data
  dimensions: object[] = new Array<object>();
  dimensionItems: object[] = new Array<object>();
  years: object[] = new Array<object>();
  months: object[] = new Array<object>();

  // Graph Data
  pieChartLabels: Label[] = new Array<string>();
  pieChartData: Array<number> = new Array<number>();

  // Class Data
  selectedDimension: string = '';
  selectedItems: object[] = new Array<object>();
  selectedYear: string = '';
  selectedMonth: string = '';
  totalSales: number = 0;

  allData: object[] = new Array<object>();

  verifyAccessToSales() {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    //@ts-ignore
    if (decoded.rol[0] != 'ALL') {
      //@ts-ignore
      if (decoded.rol[0] != 'TOP') {
        this.router.navigate(['./histogram']);
        //@ts-ignore
        console.log(decoded.rol[0]);
      }
    }
  }
  async ngOnInit() {
    this.verifyAccessToSales();
    this.dimensions = await this.north.getDimensions();
    this.years = await this.north.getDimensionYears();
    this.months = await this.north.getDimensionYearsMonths();
  }

  async setItems(data: any, type: string) {
    if (type === 'dimension') {
      this.totalSales = 0;
      this.selectedDimension = data;
    }
    if (type === 'year') {
      this.totalSales = 0;
      this.selectedYear = data;
    }
    if (type === 'month') {
      this.totalSales = 0;
      this.selectedMonth = data;
    }
    if (type === 'items') {
      this.handleItems(data);
    } else this.getTopSales();
  }

  async setDimensionItems() {
    const body = [
      this.selectedDimension,
      this.selectedYear.toString(),
      helpers.getSelectedMonth(this.selectedMonth).toString(),
      '5',
    ];

    const res = await this.north.getDimensionItems(body);

    this.dimensionItems = res;
    this.selectedItems = res;
  }

  handleItems = (data: string[]) => {};

  getAddedItem(itemAdded: string) {
    this.allData.forEach((element: { label: string; data: number }) => {
      if (element.label !== itemAdded) return;

      this.pieChartData.push(element.data);
      this.pieChartLabels.push(itemAdded);

      this.totalSales += element.data;
    });
  }

  getItemRemoved(itemRemoved: { label: string }) {
    this.allData.forEach((element: { label: string; data: number }) => {
      if (element.label !== itemRemoved.label) return;

      this.pieChartData = this.pieChartData.filter((e) => e !== element.data);
      this.pieChartLabels = this.pieChartLabels.filter(
        (e) => e !== element.label
      );

      this.totalSales -= element.data;
    });
  }

  async getTopSales() {
    const body = [
      this.selectedDimension,
      this.selectedYear.toString(),
      helpers.getSelectedMonth(this.selectedMonth).toString(),
    ];

    const res: object[] = await this.north.getTopSales(body);

    this.pieChartLabels = res[Object.keys(res)[0]];
    this.pieChartData = res[Object.keys(res)[1]];

    this.pieChartData.forEach((sale) => (this.totalSales += sale));

    this.allData = [];
    this.pieChartLabels.forEach((item, index) => {
      this.allData.push({ label: item, data: this.pieChartData[index] });
    });

    this.setDimensionItems();
  }

  getDimensionTranslation = () => {
    if (this.selectedDimension === 'Cliente') return 'client';
    if (this.selectedDimension === 'Empleado') return 'employee';
    if (this.selectedDimension === 'Producto') return 'product';
  };
}
