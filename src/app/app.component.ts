import { Component,OnInit } from '@angular/core';
import { ITodo } from './interfaces/itodo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Todos';
  todoTitle: string;
  todoDescription: string;
  todoList: Array<ITodo>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoList = this.todoService.getTodos();
  }

    // resets our todoTitle variable to an empty string

}
