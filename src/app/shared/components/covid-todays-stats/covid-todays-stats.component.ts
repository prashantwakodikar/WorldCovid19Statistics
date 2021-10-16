import { Component, OnInit } from '@angular/core';
import { CovidstatsService } from '../../../../app/shared/services/covidstats.service';

@Component({
  selector: 'app-covid-todays-stats',
  templateUrl: './covid-todays-stats.component.html',
  styleUrls: ['./covid-todays-stats.component.scss']
})
export class CovidTodaysStatsComponent implements OnInit {
  public todayCovidStats: any;
  public todayCovidStatsobj: any;

  constructor(private covidStats: CovidstatsService) {

  }


  ngOnInit(): void {
    this.covidStats.getCovidAllData().subscribe(
      data => {
        this.todayCovidStats = data;
        // console.log(data);
        // we have to conert object of data to array for repeater
        this.todayCovidStatsobj = Object.keys(this.todayCovidStats).map((key) => [String(key), Number(this.todayCovidStats[key])]);
        // console.log(this.todayCovidStatsobj);
      },
      error => {
        console.log(error);
      }
    );
  }
  
  slideConfig = {
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }
  
}
