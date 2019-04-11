import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = 'https://github.com/pranavkapoorr/repositories';  // URL to web api

  constructor( private http: HttpClient) { }

  getProjects(){
    return this.http.get<string>(this.projectsUrl).subscribe();
  }
}
