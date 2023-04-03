import { Injectable } from '@angular/core';

declare let Plotly: any;

@Injectable({
  providedIn: 'root'
})
export class PlotlyService {

  constructor() { }

  plotGrafik(title: string, plotDiv: string, x: string[], y: number[]) {
    let trace = {
      x: x,
      y: y,
      type: 'bar'
    };

    let layout = {
      title: title
    };

    Plotly.newPlot(plotDiv, [trace], layout);
  }

}
