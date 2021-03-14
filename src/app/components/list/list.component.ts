import { Component, OnInit } from '@angular/core';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  todos: Todo[];

  addTodo(todoText: HTMLInputElement) {
    const obj = {
      text: todoText.value,
      createdAt: new Date(),
    };
    this.todoService.addTodo(obj);
    todoText.value = '';
  }
  removeTodo(todo: Todo) {
    this.todoService.removeTodo(todo);
  }
}
