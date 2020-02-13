import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'pm-child-message',
  templateUrl: './child-message.component.html',
  styleUrls: ['./child-message.component.css']
})
export class ChildMessageComponent implements OnInit {
  @Input() message:String;
  constructor() { }

  ngOnInit() {
  }

}
