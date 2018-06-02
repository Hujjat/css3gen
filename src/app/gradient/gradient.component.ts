import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css']
})
export class GradientComponent implements OnInit {

  color1 = 'red';
  color2 = 'blue';

  constructor() { }

  ngOnInit() {
  }

}
