import { Component, OnInit } from '@angular/core';
import { todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: todo[] = [];
  newTodoTitle = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      const newTodo: todo = {
        id: Date.now(),
        title: this.newTodoTitle,
        completed: false
      };
      this.todoService.addTodo(newTodo);
      this.newTodoTitle = '';
    }
  }

  deleteTodo(id: number): void {
    this.todoService.deletetodo(id);
  }
}