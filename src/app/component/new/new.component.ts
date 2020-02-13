import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../../data-service.service";
@Component({
  selector: 'pm-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  messageFromChild="i am previous value"
  constructor(private service:DataServiceService) { 
    console.log("hello i am constructor",service.getData())
    service.getData().subscribe((data)=>{
      console.log(data)
    })
  }
  // ngOnChanges(){
  //   console.log("ng changes")
  // }
  ngOnInit() {
      console.log("ng on Init")
  }
  // ngDoCheck(){
  //   console.log("ng do check")
  // }
  // ngAfterContentInit(){
  //   console.log("ngAfterContentInit()")
  // }
  // ngAfterViewInit(){
  //   console.log("ngAfterViewInit()")
  // }
  // ngAfterViewChecked(){
  //   console.log("ngAfterViewChecked()")
  // }
  // ngOnDestroy(){
  //   console.log("ngOnDestroy  ")
  // }

  myData(e:any){
    this.messageFromChild=e
  }

}
