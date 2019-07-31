import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

 public  getTodos(){
    return this.http.get<Todo[]>("https://restify-the-placeholder-api.herokuapp.com/todos");
    
  }
}
