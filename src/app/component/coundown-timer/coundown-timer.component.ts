import { Component, OnInit,OnDestroy } from '@angular/core';
import{} from '@angular/core';
@Component({
  selector: 'pm-coundown-timer',
  templateUrl: './coundown-timer.component.html',
  styleUrls: ['./coundown-timer.component.css']
})
export class CoundownTimerComponent implements OnInit,OnDestroy {

  Id=0;
  message='';
  seconds=11;

    clearTimer()
    {
      clearInterval(this.Id);
    }

  constructor() { }

  ngOnInit() {
    this.start();
  }
  ngOnDestroy()
  {
    this.clearTimer()
  }
  start()
  {
      this.countDown();

  }
  stop()
  {
    this.clearTimer();this.message='Holding At  T-${this.seconds} seconds'
  }
  private countDown()
  {
    this.clearTimer();
    this.Id=window.setInterval(()=>{
      this.seconds -=1;
      if(this.seconds === 0)
      {
        this.message='Blast off !';
      }
      else{
            if(this.seconds <0)
           {
              this.seconds=10;
              this.message = `T-${this.seconds} seconds and counting`;
          }
      }
 
    },1000);

  }
}
