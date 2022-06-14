import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  isDisabled: boolean = false;

  onClick() {
    console.log("Button has clicked");
  }

  constructor() { }

  ngOnInit(): void {
  }

}




  
  
  