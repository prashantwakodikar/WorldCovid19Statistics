import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { CovidTodaysStatsComponent } from './shared/components/covid-todays-stats/covid-todays-stats.component';
import { CountryCovidCheckerComponent } from './shared/components/country-covid-checker/country-covid-checker.component';

import { HttpClientModule } from "@angular/common/http";
import { CovidstatsService } from "../app/shared/services/covidstats.service";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms'
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { CountrySearchBoxComponent } from './shared/components/country-search-box/country-search-box.component';
import { ScrollDownArrowComponent } from './shared/components/scroll-down-arrow/scroll-down-arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CountryCovidCheckerComponent,
    CovidTodaysStatsComponent,
    CountrySearchBoxComponent,
    ScrollDownArrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SlickCarouselModule,
    AutocompleteLibModule
  ],
  providers: [CovidstatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
