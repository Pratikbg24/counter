import { Component, OnInit, Input,Output,EventEmitter,OnChanges } from '@angular/core';

@Component({
  selector: 'pm-on-chang',
  templateUrl: './on-chang.component.html',
  styleUrls: ['./on-chang.component.css']
})
export class OnChangComponent implements OnChanges{

  @Input() dataFromParent:string
  @Output() dataFromChild=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(change){
    console.log(change.dataFromParent.previousValue,change.dataFromParent.currentValue)
  }
  ngDoCheck(value){
    console.log("calling do check",value)
  }

  passDate(e){
    this.dataFromChild.emit(e.target.value)
    console.log(e.target.value)
  }
}
