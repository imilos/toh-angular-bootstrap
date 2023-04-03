import { Component, OnInit } from '@angular/core';
import { PlotlyService } from '../plotly.service';

@Component({
  selector: 'app-hero-plot',
  templateUrl: './hero-plot.component.html',
  styleUrls: ['./hero-plot.component.css']
})
export class HeroPlotComponent implements OnInit {

  constructor (private plot: PlotlyService) { }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }  

  ngOnInit(): void {
    let x:string[] = ["Snaga", "Zdravlje", "Magija"];
    let y:number[] = [this.getRandomInt(5), this.getRandomInt(5), this.getRandomInt(5)];

    this.plot.plotGrafik("Kvaliteti junaka", "grafikon", x, y);
  }

}
