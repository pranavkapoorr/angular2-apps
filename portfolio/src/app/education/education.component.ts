import { Component, OnInit } from '@angular/core';
import { FLY_IN_OUT_ANIMATION } from '../animations/flyinout';
import { Education } from '../models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [
    FLY_IN_OUT_ANIMATION
  ]
})
export class EducationComponent implements OnInit {
  educations : Education[] = [
    {title: 'IT Project Management', school: 'Stratford University, Virginia USA', timeline:'2016 - 2016',summary:'alige methodologies like SCRUM & KANBAN; software developement models like WATERFALL, SPIRAL, V-model'},
    {title: 'Computer Science & Engineering', school: 'Punjab Technical University, Punjab IN', timeline:'2010 - 2014',summary:'four year Bachelors Degree in Computer Science; Computer Graphics, Networks, Programming, Scripting, RDBMS, etc'},
    ];

  constructor() { }

  ngOnInit() {
  }

}
