import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  private Todos : Todo[] = [];
  constructor(private service: TodoService) { }

  ngOnInit() {
    this.service.getTodos().subscribe((res)=>
    {
        this.Todos = res;
      }
    );
  }

  deleteTodo(Todo:Todo){
    this.Todos = this.Todos.filter(t => t.id !== Todo.id);
  }

}
