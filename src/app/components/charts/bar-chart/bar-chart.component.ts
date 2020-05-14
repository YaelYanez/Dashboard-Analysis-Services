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
  barChartOptions: ChartOptions = { responsive: true };
  barChartLegend = true;
  barChartPlugins = [];
  barChartColors: Colors[] = [
    { backgroundColor: '#007bff' },
    { backgroundColor: '#5856d6' },
    { backgroundColor: '#af52de' },
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
