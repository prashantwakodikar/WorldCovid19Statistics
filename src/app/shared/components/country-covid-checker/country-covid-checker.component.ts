import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidstatsService } from '../../../../app/shared/services/covidstats.service';

@Component({
  selector: 'app-country-covid-checker',
  templateUrl: './country-covid-checker.component.html',
  styleUrls: ['./country-covid-checker.component.scss']
})
export class CountryCovidCheckerComponent implements OnInit {
  public covidCountryObj:any;
  public countrydropdown:any;
  public singleCountryObj:any;

  constructor(private covidStats: CovidstatsService) { 
    this.countrydropdown = null;
  }

  ngOnInit(): void {
    
    this.covidStats.getCovidCountriesData().subscribe(
      data =>{
        // console.log(data);
        this.covidCountryObj = data;
      },
      error =>{
        console.log(error);
      }
    );

  }
  onCountryChange(obj:any){
    console.log(obj);
    console.log(obj.control.value);
    this.covidStats.getCovidSpecificCountriesData(String(obj.control.value)).subscribe(
      data =>{
        console.log(data);
        this.singleCountryObj = data;
      },
      error =>{
        console.log(error);
      }
    );

  }

}
