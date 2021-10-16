import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidstatsService {

  constructor(private http:HttpClient) { }
  
  private api_path = "https://disease.sh/v3/covid-19/";
  
  getCovidAllData():Observable<object>{
    return this.http.get(this.api_path+"all");
  }
  
  getCovidCountriesData():Observable<object>{
    return this.http.get(this.api_path+"countries");
  }

  getCovidSpecificCountriesData(countryName:string):Observable<object>{
    console.log('dynamicApiPath='+this.api_path+"countries/"+countryName);
    return this.http.get(this.api_path+"countries/"+countryName);
  }

}
