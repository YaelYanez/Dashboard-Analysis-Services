import { Component, Input } from '@angular/core';
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
  @Input() pieChartLabels: Label[];
  @Input() pieChartData: SingleDataSet;
  pieChartOptions: ChartOptions = {
    responsive: true,
    aspectRatio: 1.5,
    cutoutPercentage: 95,
    layout: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    legend: {
      position: 'bottom',
      labels: {
        fontFamily: '"Muli", sans-serif',
        fontColor: '#A2A3C3',
        fontSize: 13,
        padding: 20,
        boxWidth: 20,
      },
    },
  };
  pieChartType: ChartType = 'doughnut';
  pieChartLegend = true;
  pieChartPlugins = [];
  pieChartColors: Colors[] = [
    {
      backgroundColor: ['#4D4CAC', '#FF606D', '#5E81F4'],
      borderColor: 'white',
      borderWidth: 4,
      hoverBorderWidth: 0,
    },
  ];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
}
