import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxshadow',
  templateUrl: './boxshadow.component.html',
  styleUrls: ['./boxshadow.component.css']
})
export class BoxshadowComponent implements OnInit {

  horizontal = '5';
  vertical = '5';
  blur = '5';
  spread = '5';
  color = 'red';

  constructor() { }

  ngOnInit() {
  }

}
