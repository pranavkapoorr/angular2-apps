import { Component, OnInit } from '@angular/core';
import { FLY_IN_OUT_ANIMATION } from '../animations/flyinout';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    FLY_IN_OUT_ANIMATION
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
