import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Colors } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  barChartType: ChartType = 'bar';
  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 4,
    layout: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
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
    scales: {
      xAxes: [
        {
          barPercentage: 0.3,
          categoryPercentage: 0.5,
          gridLines: {
            display: false,
          },
          ticks: {
            fontSize: 13,
            fontFamily: '"Muli", sans-serif',
            fontColor: '#A2A3C3',
            padding: 0,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            fontSize: 10,
            fontFamily: '"Muli", sans-serif',
            fontColor: '#A2A3C3',
            padding: 0,
          },
        },
      ],
    },
  };
  barChartLegend = true;
  barChartPlugins = [];
  barChartColors: Colors[] = [
    { backgroundColor: '#4D4CAC' },
    { backgroundColor: '#FF606D' },
    { backgroundColor: '#5E81F4' },
  ];
  barChartData: ChartDataSets[] = [
    {
      data: [45, 70, 37, 46, 33, 45, 37, 60, 60, 70, 46, 33],
      label: 'Best Fruits',
    },
    {
      data: [23, 37, 60, 70, 46, 33, 45, 37, 60, 70, 46, 33],
      label: 'Worst Fruits',
    },
    {
      data: [12, 60, 70, 46, 33, 37, 60, 70, 46, 33, 45, 37],
      label: 'Kind da good Fruits',
    },
  ];
  barChartLabels: Label[] = [
    'Apple',
    'Banana',
    'Kiwifruit',
    'Blueberry',
    'Orange',
    'Grapes',
    'Apple',
    'Banana',
    'Kiwifruit',
    'Blueberry',
    'Orange',
    'Grapes',
  ];
}
