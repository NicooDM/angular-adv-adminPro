import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {
  @Input() title:string =''
// Doughnut
@Input("labels")doughnutChartLabels: string[]|any = [
  'Download Sales',
  'In-Store Sales',
  'Mail-Order Sales',
];
@Input("data") doughnutChartData: ChartData<'doughnut'> | any = {
  labels: this.doughnutChartLabels,
  datasets: [
    {
      data: [350, 450, 100],
      backgroundColor: ['#9E120', '#FF5800', '#FFB414'],
    },
  ],
};
public doughnutChartType: ChartType = 'doughnut';
}
