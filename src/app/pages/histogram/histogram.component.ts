import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { NorthwindService } from 'src/app/services/northwind.service';
import * as helpers from '../../helpers/helpers';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'histogram-page',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss'],
})
export class HistogramPage implements OnInit {
  constructor(private north: NorthwindService, private router: Router) {}

  helpers = helpers;

  // Selects Data
  dimensions: object[] = new Array<object>();
  dimensionItems: object[] = new Array<object>();
  years: object[] = new Array<object>();
  months: object[] = new Array<object>();

  // Class Data
  selectedDimension: string = '';
  selectedItems: object[] = new Array<object>();
  selectedYear: string = '';
  selectedMonth: string;

  isContentLoading: boolean = false;

  barChartData: ChartDataSets[] = [];
  barChartLabels: object[];

  verifyAccessHistogram() {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);

    // @ts-ignore
    if (decoded.rol[0] != 'ALL') {
      // @ts-ignore
      if (decoded.rol[0] != 'HIST') {
        this.router.navigate(['./topSales']);
        // @ts-ignore
        console.log(decoded.rol[0]);
      }
    }
  }

  async ngOnInit() {
    this.verifyAccessHistogram();
    this.dimensions = await this.north.getDimensions();
    this.years = await this.north.getDimensionYears();
    this.months = await this.north.getDimensionYearsMonths();
  }

  setItems(data: any, type: string) {
    if (type === 'dimension') {
      this.selectedDimension = data;

      if (data !== null) this.selectedItems = [];
      this.getTopSales();
    }
    if (type === 'year') {
      if (data === null) {
        this.selectedYear = '';
        this.selectedMonth = null;
      } else this.selectedYear = data;

      this.selectedItems = [];
      this.getTopSales();
    }
    if (type === 'month') {
      if (data === null) {
        this.selectedMonth = null;
      } else this.selectedMonth = data;

      this.selectedItems = [];
      this.getTopSales();
    }
    if (type === 'items') {
      this.selectedItems = data;
      if (this.selectedItems.length > 0) this.getTopSales();
    }
  }

  async setDimensionItems() {
    const body = [
      this.selectedDimension,
      this.selectedYear.toString(),
      helpers.getSelectedMonth(this.selectedMonth).toString(),
      '',
    ];

    this.isContentLoading = true;

    const res = await this.north.getDimensionItems(body);

    this.dimensionItems = res;
    this.isContentLoading = false;
  }

  async getTopSales() {
    const body: any = [
      [
        this.selectedDimension,
        this.selectedYear.toString(),
        helpers.getSelectedMonth(this.selectedMonth).toString(),
      ],
      this.selectedItems,
    ];

    const res: object[] = await this.north.getHistogram(body);

    this.barChartData = res[Object.keys(res)[0]];
    this.barChartLabels = res[Object.keys(res)[1]];

    this.selectedItems = res[Object.keys(res)[1]];

    if (this.selectedMonth) {
      this.barChartData.forEach((item) => {
        item.label = helpers
          .getSelectedMonthFromYearIndex(Number(item.label))
          .toUpperCase();
      });
    }

    this.setDimensionItems();
  }

  getDimensionTranslation = () => {
    if (this.selectedDimension === 'Cliente') return 'client';
    if (this.selectedDimension === 'Empleado') return 'employee';
    if (this.selectedDimension === 'Producto') return 'product';
  };
}
