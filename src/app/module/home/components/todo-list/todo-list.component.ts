import { Component, OnInit } from '@angular/core';
// interface
import {TaskList} from '../../model/task-list';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {

  listaCompleta : Array<TaskList> = [
    {task: 'Minha nova Task', checked: true},
    {task: 'Minha nova Task 2', checked: false}
  ];
  constructor() { }

  ngOnInit(): void {
    
  }
}
