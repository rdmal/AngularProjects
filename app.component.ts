import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
text: string = 'My First Component is ready';
isGreen: boolean = false;

isDisabled: boolean = false;

onClick() {
  console.log("Button has clicked");
}

constructor() {}

  ngOnInit(): void {
    
  }
  
  }
  

