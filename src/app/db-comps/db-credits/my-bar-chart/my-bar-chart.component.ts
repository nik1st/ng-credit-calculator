import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {

  @Input() barChartLabels: string[];
  @Input() barChartData: [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Сумма кредита'},
     {data: [28, 48, 40, 19, 86, 27, 90], label: 'Начисленные проценты'}];


  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  //public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  // barChartData = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Сумма кредита'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Начисленные проценты'}
  // ];
  
  ngOnInit() {
  }

}
