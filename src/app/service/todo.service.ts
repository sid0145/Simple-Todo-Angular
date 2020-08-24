import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Todo } from '../model/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() {
    this.todos=[
      {
      id:'1',
      title:'first',
      isComplete: true,
      date :new Date()
    },
    {
      id:'2',
      title:'second',
      isComplete: false,
      date :new Date()
    }
  ]}

getTodo(){
  return of(this.todos);
}

addTodo(todo: Todo){
  this.todos.push(todo);
}

changeStatus(todo: Todo){
  this.todos.map(singleTodo =>{
    if(singleTodo.id === todo.id){
      todo.isComplete= !todo.isComplete;
    }
  })
}

deleteTodos(todo: Todo){
  const indexofTodo=this.todos.findIndex((obj)=>obj.id===todo.id);
   this.todos.splice(indexofTodo, 1)
}

}
