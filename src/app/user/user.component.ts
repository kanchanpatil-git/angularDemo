import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() parentComponet:EventEmitter<any> =new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.parentComponet.emit({name:"kanchan",age:"27"})
  }

}
