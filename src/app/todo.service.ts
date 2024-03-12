import { Injectable } from '@angular/core';
import { todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos:todo[]=[];

  constructor() { }
  getTodos():todo[]{
    return this.todos;
  }
  addTodo(todo:todo):void{
    this.todos.push(todo);
  }
  deletetodo(id:number):void{
    this.todos.splice(id, 1);
  }
}
