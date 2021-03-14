import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  todos: Todo[] = [
    { text: 'Todo1', createdAt: new Date() },
    { text: 'Todo2', createdAt: new Date() },
    { text: 'Todo3', createdAt: new Date() },
    { text: 'Todo4', createdAt: new Date() },
  ];
  getTodos(){
    return this.todos;
  }

  addTodo(obj){
    this.todos.push(obj);
  }
  removeTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}
