import { Component, OnInit } from '@angular/core';
import { NorthwindService } from 'src/app/services/northwind.service';
import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private north: NorthwindService) {}

  pieChartLabels: Label[] = new Array<string>();
  pieChartData: Array<number> = new Array<number>();

  barChartData: any = [];
  barChartLabels: object[];

  async ngOnInit() {
    const pieBody: any = ['Cliente', '', ''];
    const barBody: any = [['Ciente', '', ''], []];

    const pieRes: object[] = await this.north.getTopSales(pieBody);
    this.pieChartLabels = pieRes[Object.keys(pieRes)[0]];
    this.pieChartData = pieRes[Object.keys(pieRes)[1]];

    const barRes: object[] = await this.north.getHistogram(barBody);
    this.barChartLabels = barRes[Object.keys(barRes)[1]];
    this.barChartLabels = this.barChartLabels.slice(0, 10);

    this.barChartData = barRes[Object.keys(barRes)[0]];
    this.barChartData = this.barChartData.forEach((index: number) => {
      this[index].data = this[index].data.slice(0, 10);
    });
  }
}
