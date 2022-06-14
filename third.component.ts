import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  text2: string = 'two way data binding';

  constructor() { }

  ngOnInit(): void {
  }

}
