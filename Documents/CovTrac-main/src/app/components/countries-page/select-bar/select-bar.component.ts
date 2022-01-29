import { Component, Input, OnInit } from '@angular/core';
import { CountrywideDailyAggregate } from 'src/app/models/countrywide-daily-aggregate.model';
import { CountrywideDataService } from 'src/app/services/countrywide-data.service';

@Component({
  selector: 'app-select-bar',
  templateUrl: './select-bar.component.html',
  styleUrls: ['./select-bar.component.css']
})
export class SelectBarComponent implements OnInit {
  countryData:CountrywideDailyAggregate[] = [];
  countries:string[]=[];
  
  @Input()
  con : any;
  
  constructor(private countrywideDataService:CountrywideDataService) { }

  ngOnInit(): void {
    this.getAllCountrywideData();
  }
  getAllCountrywideData(){
    this.countrywideDataService.getCountryData().subscribe((data: any) => {
      this.countryData = data;
      this.countries.push('Pakistan')
      this.countryData.forEach((con)=>{
        this.countries.push(con.country );
      })
      
      
     
      
      

      
      //this.countries.push(this.countryData[this.countryData.length -1].country);
      //console.log(this.countries);
      
      
    });
    
  }


}
