import { Component, OnInit } from '@angular/core';
import { CoundownTimerComponent }  from '../coundown-timer/coundown-timer.component';
import { AfterViewInit, ViewChild } from '@angular/core';
@Component({
  selector: 'pm-countdown-parent',
  templateUrl: './countdown-parent.component.html',
  styleUrls: ['./countdown-parent.component.css']
})
export class CountdownParentComponent implements OnInit, AfterViewInit  {

  @ViewChild(CoundownTimerComponent,{static:false})
  private timerComponent: CoundownTimerComponent;

  seconds() {
     return 0; 
    }

  constructor() { }
  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }
  start() {
     console.log(this.timerComponent)
      this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }

  ngOnInit() {
  }

}
