import { Component, OnInit } from '@angular/core';

import  { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  faTrashAlt =faTrashAlt;
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodo().subscribe(todos=>{
      this.todos=todos;
    });
  }

  changeTodoStatus(todo: Todo){
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodos(todo);
  }

}
