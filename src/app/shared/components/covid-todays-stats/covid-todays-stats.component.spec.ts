import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTodaysStatsComponent } from './covid-todays-stats.component';

describe('CovidTodaysStatsComponent', () => {
  let component: CovidTodaysStatsComponent;
  let fixture: ComponentFixture<CovidTodaysStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidTodaysStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidTodaysStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
