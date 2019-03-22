import { Component, OnInit } from '@angular/core';
import { FLY_IN_OUT_ANIMATION } from '../animations/flyinout';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [
    FLY_IN_OUT_ANIMATION
  ]
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
