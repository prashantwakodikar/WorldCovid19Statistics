import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCovidCheckerComponent } from './country-covid-checker.component';

describe('CountryCovidCheckerComponent', () => {
  let component: CountryCovidCheckerComponent;
  let fixture: ComponentFixture<CountryCovidCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryCovidCheckerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCovidCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
