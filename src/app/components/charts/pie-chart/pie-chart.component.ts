import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
  Colors,
} from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  public pieChartOptions: ChartOptions = {
    responsive: true,
    layout: {
      padding: {
        left: 20,
      },
    },
    legend: {
      position: 'left',
      align: 'center',
      labels: {
        padding: 20,
        fontColor: 'white',
        fontStyle: 'bold',
        fontSize: 15,
      },
    },
  };
  public pieChartLabels: Label[] = ['SciFi', 'Drama', 'Comedy'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Colors[] = [
    {
      backgroundColor: ['#007bff', '#5856d6', '#af52de'],
      borderColor: 'white',
    },
  ];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
}
