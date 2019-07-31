import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() Todo:Todo;
  @Output() deleteTodo:EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  markCompleted(Todo:Todo){
    Todo.completed = !Todo.completed;
  }
  onDelete(Todo:Todo){
    this.deleteTodo.emit(Todo);
  }
}
