import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CovidstatsService } from '../../../../app/shared/services/covidstats.service';

@Component({
  selector: 'app-country-search-box',
  templateUrl: './country-search-box.component.html',
  styleUrls: ['./country-search-box.component.scss']
})
export class CountrySearchBoxComponent implements OnInit {
  public covidCountryObj:any;
  public autocompleteObj:any;
  keyword = 'country';
  @Output() searchDataEvent = new EventEmitter();
  
  constructor(private covidStats: CovidstatsService) { 
    
  }
  
  ngOnInit(): void {
    this.covidStats.getCovidCountriesData().subscribe(
      data =>{
        console.log(data);
        this.covidCountryObj = data;
        // this.autocompleteObj = data;
      },
      error =>{
        console.log(error);
      }
    );
    

  }
  

  selectEvent(obj:any) {
    // do something with selected item
    console.log(obj);
    this.covidStats.getCovidSpecificCountriesData(String(obj.country)).subscribe(
      data =>{
        console.log(data);
        // this.singleCountryObj = data;
        this.searchDataEvent.emit(data);
      },
      error =>{
        console.log(error);
      }
    );
  }

  onChangeSearch(val: string) {
    // console.log(val)
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.

  }
  
  onFocused(e:any){
    // do something when input is focused
    // console.log(e)
  }



}
