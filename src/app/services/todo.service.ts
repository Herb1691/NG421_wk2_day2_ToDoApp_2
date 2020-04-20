import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoTitle: '';

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
      id: ++this.todoId,
      title: todo.title,
      description: ''
    });

    this.todoTitle = '';

  }

  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
}
