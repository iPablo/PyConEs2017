import { Component, OnInit } from '@angular/core';
import { Bar } from './bar';
import { BarsProvider } from './bars.provider';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {

  bars: Bar[] = [];

  constructor(private barsProvider: BarsProvider) { }

  ngOnInit() {
    this.barsProvider.getBars().subscribe(bars => this.bars = bars);
  }

}
