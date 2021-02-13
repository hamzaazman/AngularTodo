import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoArray = []


  addTodo(value){
    this.todoArray.push(value)
  }
  deleteItem(value){
    this.todoArray.splice(0,1)
  }
  todoSubmit(value:any){
    this.todoArray.push(value)
  }

}
