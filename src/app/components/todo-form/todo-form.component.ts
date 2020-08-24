import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

import  { v4 as uuidv4 } from 'uuid';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  newTitle:string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  handleTodo(){
    const newTodo :Todo={
      id: uuidv4(),
      title : this.newTitle,
      isComplete :false,
      date : new Date()
    };
    this.todoService.addTodo(newTodo);
    this.newTitle="";
  }

}
