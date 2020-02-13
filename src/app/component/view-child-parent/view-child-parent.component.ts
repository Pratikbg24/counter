import { Component, OnInit,ViewChild, AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { ChildMessageComponent } from "../child-message/child-message.component"
@Component({
  selector: 'pm-view-child-parent',
  templateUrl: './view-child-parent.component.html',
  styleUrls: ['./view-child-parent.component.css']
})
export class ViewChildParentComponent  implements OnInit ,AfterViewInit {
message:any;

  @ViewChild(ChildMessageComponent,{static:false}) myViewChild:ChildMessageComponent;

  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit() {
    this.message="Hello !!";
   // this.message=this.getMessage();
  }
  ngAfterViewInit(){
    console.log(this.myViewChild);

    this.cd.detectChanges();

  }

}
