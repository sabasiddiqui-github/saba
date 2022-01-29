import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {
  columnChart: GoogleChartInterface = {
    chartType : 'ColumnChart'
  };

  constructor() {}

  ngOnInit(): void {
    
    this.columnChart = {
      chartType: GoogleChartType.ColumnChart,
      dataTable: [
        ['Country', 'Cases'],
        ['US', 1100090],
        ['UK', 2765675],
        ['Canada', 2759897],
        ['Pakistan', 277508],
        ['Austrailia', 759857]
      ],
      //firstRowIsData: true,
      options: {
        height: 500
      },
    };
  }
}
