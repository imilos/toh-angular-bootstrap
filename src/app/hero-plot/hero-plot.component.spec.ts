import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPlotComponent } from './hero-plot.component';

describe('HeroPlotComponent', () => {
  let component: HeroPlotComponent;
  let fixture: ComponentFixture<HeroPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroPlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
