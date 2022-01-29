import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface,GoogleChartType} from 'ng2-google-charts';

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css']
})
export class GoogleChartComponent implements OnInit {
  lineChart:GoogleChartInterface={
    chartType:'LineChart'
  };
  constructor() {}

  ngOnInit(): void {
    
    this.lineChart = {
      chartType: GoogleChartType.LineChart,
      dataTable: [
        ['Date', 'Cases'],
        ['2020-01-24', 0],
        ['2020-01-25', 5],
        ['2020-01-26', 11],
        ['2020-01-27', 30],
        ['2020-01-28', 90],
        ['2020-03-1', 120],
        ['2020-03-2', 160]
      ],
      //firstRowIsData: true,
      options: {
        height: 500
      },
    };
  }

}