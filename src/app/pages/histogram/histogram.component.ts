import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'histogram-page',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss'],
})
export class HistogramPage implements OnInit {
  selectedDimension: string;
  selectedItems: string[] = new Array<string>();
  selectedYear: number;
  selectedMonth: string;

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

  barChartData: ChartDataSets[] = [
    {
      data: [45, 70, 37, 40],
      label: '1997',
    },
    {
      data: [23, 37, 60, 50],
      label: '1998',
    },
    {
      data: [12, 60, 70, 60],
      label: '1999',
    },
  ];

  barChartLabels: Label[];

  ngOnInit() {}

  setItems(data: any, type: string) {
    if (type === 'dimension') this.selectedDimension = data;
    if (type === 'month') this.selectedMonth = data;
    if (type === 'year') this.selectedYear = data;

    if (type === 'items') {
      this.selectedItems = data;
      this.barChartLabels = data;
    }
  }
}
