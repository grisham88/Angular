import { Component } from '@angular/core';
import { ChucknorrisService } from '../chucknorris.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers: [ChucknorrisService]
})

export class TodolistComponent {

  todoText = '';
  todos: string[] = [];
  isEditMode = false;
  indexTodoUpdate = -1;
  jokeText = '';

  constructor(private chucknorrisServer: ChucknorrisService) {

  }

  addTodo() {
    if (this.todoText) {
      this.todos.push(this.todoText);
      this.todoText = '';
    }
  }

  editTodo(index: number) {
    this.indexTodoUpdate = index;
    this.todoText = this.todos[index];
    this.isEditMode = true;
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);

    this.chucknorrisServer.getJoke().subscribe(joke =>
      this.todoText = joke.value);
  }

  updateTodo() {
    if (this.isEditMode && this.todoText) {
      this.todos[this.indexTodoUpdate] = this.todoText;
      this.todoText = '';
      this.isEditMode = false;
      this.indexTodoUpdate = -1;
    } else {
      alert('Bitte einen Text hinterlegen!');
    }
  }

  clearTodos() {
    this.todos = [];
  }
}
