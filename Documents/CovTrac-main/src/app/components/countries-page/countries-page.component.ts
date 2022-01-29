import { Component, OnInit } from '@angular/core';
import { CountrywideDailyAggregate } from 'src/app/models/countrywide-daily-aggregate.model';
import { CountrywideDataService } from 'src/app/services/countrywide-data.service';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.css']
})
export class CountriesPageComponent implements OnInit {
  countryData:CountrywideDailyAggregate[] = [];
  countries:string[]=[];
  constructor(private countrywideDataService:CountrywideDataService) { }

  ngOnInit(): void {
    this.getAllCountrywideData();
  }
  getAllCountrywideData(){
    this.countrywideDataService.getCountryData().subscribe((data: any) => {
      this.countryData = data[0];
      this.countries = data[1];
      console.log(this.countries);
      
      
    });
  }

}
