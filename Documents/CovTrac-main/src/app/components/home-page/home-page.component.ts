import {Component, OnInit} from '@angular/core';
import {GlobalDataService} from "../../services/global-data.service";
import {WorldwideDailyAggregate} from "../../models/worldwide-daily-aggregate.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  globalData: WorldwideDailyAggregate[] = [];

  constructor(private globalDataService : GlobalDataService) { }

  ngOnInit(): void{
    this.getAllGlobalData();
  }

  getAllGlobalData(){
    this.globalDataService.getGlobalData().subscribe((data: any) => {
      this.globalData = data;
    });
  }

}
