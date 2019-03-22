import { Component, OnInit } from '@angular/core';
import { FLY_IN_OUT_ANIMATION } from '../animations/flyinout';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    FLY_IN_OUT_ANIMATION
  ]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
