import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { NorthwindService } from 'src/app/services/northwind.service';
import * as helpers from '../../helpers/helpers';

@Component({
  selector: 'top-sales-page',
  templateUrl: './top-sales.component.html',
  styleUrls: ['./top-sales.component.scss'],
})
export class TopSalesPage implements OnInit {
  constructor(private north: NorthwindService) {}

  dimensions: object[] = new Array<object>();
  dimensionsRes: object[] = new Array<object>();
  years: object[] = new Array<object>();
  months: object[] = new Array<object>();

  selectedDimension: string = '';
  selectedItems: string[] = new Array<string>();
  selectedYear: string = '';
  selectedMonth: string = '';

  pieChartLabels: Label[] = new Array<string>();
  pieChartData: SingleDataSet = new Array<number>();

  async ngOnInit() {
    this.dimensions = await this.north.getDimensions();
  }

  setItems(data: any, type: string) {
    if (type === 'dimension') {
      this.selectedDimension = data;
      this.dimensionsRes = this.north.getDimensionItems(data);
      this.years = this.north.getDimensionYears(data);
    }

    if (type === 'year') {
      this.selectedYear = data;
      this.months = this.north.getDimensionYearsMonths(
        this.selectedDimension,
        data
      );
    }

    if (type === 'month') this.selectedMonth = data;

    if (type === 'items') this.handleItems(data);
    else
      this.getTopSales(
        this.selectedDimension,
        this.selectedYear.toString(),
        helpers.getSelectedMonth(this.selectedMonth).toString()
      );
  }

  handleItems = (data: string[]) => {
    this.selectedItems = data;
    this.pieChartLabels = data;
  };

  getTopSales = (dimension: string, year: string = '', month: string = '') => {
    const body: object = { dimension, year, month };

    console.log(body);
  };
}
