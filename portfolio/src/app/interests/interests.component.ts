import { Component, OnInit } from '@angular/core';
import { FLY_IN_OUT_ANIMATION } from '../animations/flyinout';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
  animations: [
    FLY_IN_OUT_ANIMATION
  ]
})
export class InterestsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
