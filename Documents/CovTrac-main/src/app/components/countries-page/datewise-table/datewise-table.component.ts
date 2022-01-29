import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datewise-table',
  templateUrl: './datewise-table.component.html',
  styleUrls: ['./datewise-table.component.css']
})
export class DatewiseTableComponent implements OnInit {
  @Input()
  data : any;

  @Input()
  scope : any;
  constructor() { }

  ngOnInit(): void {
  }

}
