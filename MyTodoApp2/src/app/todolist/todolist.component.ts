import { Component } from '@angular/core';
import { ChucknorrisService } from '../chucknorris.service';
import { TrumpService } from '../trump.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  providers: [ChucknorrisService,
    TrumpService]
})

export class TodolistComponent {

  todoText = '';
  todos: string[] = [];
  isEditMode = false;
  indexTodoUpdate = -1;
  jokeText = '';
  thoughts = '';

  constructor(private chucknorrisServer: ChucknorrisService,
    private trumpService: TrumpService,
    private router: Router) { }

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
      this.jokeText = joke.value);

    this.trumpService.getThoughts('Chuck Norris').subscribe(thoughts =>
      this.thoughts = thoughts.message);
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

  goToAbout() {
    this.router.navigate(['/about']);
  }
}
