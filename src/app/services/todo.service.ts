import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: Array<ITodo> = [
    { id: 1, title: 'Install Angular CLI', description: 'Just Do It' },
  ];
  todoId = 1;

  constructor() {}

  getTodos() {
    return this.todoList;
  }

  addTodo(todo: ITodo): void {
    this.todoList.push({
      id: this.todoId++,
      title: todo.title,
      description: todo.description
    });

  }

  deleteTodo(todo: ITodo) {
    this.todoList.splice(todo.id, 1);
  }
}
