import { Component, OnInit } from '@angular/core';
import { FLY_IN_OUT_ANIMATION } from '../animations/flyinout';
import { ProjectService } from '../services/project-service.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    FLY_IN_OUT_ANIMATION
  ]
})
export class ProjectsComponent implements OnInit {
  hero:string;
  constructor(private projectService:ProjectService) { }

  ngOnInit() {
     console.log(this.projectService.getProjects());
  }

}
