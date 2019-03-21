import { Component, OnInit } from '@angular/core';
import { Experience } from '../utils/experience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  experiences : Experience[] = [
    {title: 'Sr Software Engineer', company: 'Valitor, London GB.', timeline:'May 2017 - present',techstack:'Java 8,Python,NodeJS,Dart,Android,Flutter,SpringBoot,MVC,AKKA,Express,Socketio,CSS(Bootstrap),Javascript(JQuery,Angular,Bootstrap),GIT(Github, Bitbucket)'},
    {title: 'Java Developer', company: 'travelfusion, London GB.', timeline:'Mar 2017 - May 2017',techstack:'Java 8, SVN, Kubuntu-bash'},
    {title: 'IT Consultant', company: 'Navin Associates, Bengaluru IN.', timeline:'Jan 2016 - Nov 2016',techstack:'Java 7, HTML, C++,CSS(Bootstrap),Javascript(JQuery,Bootstrap)'},
    {title: 'Sr Executive (MIS)', company: 'Aver Exim, Punjab IN.', timeline:'Dec 2014 - Oct 2015',techstack:'Java 7, C, C++, Swing, Neworking and T-shooting'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
