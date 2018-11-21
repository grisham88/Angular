import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  todoText = '';
  todos: string[] = [];
  allowAddTodo = true;
  isEditMode = false;
  todoUpdateIndex = -1;

  addTodo() {
    if (this.allowAddTodo && this.todoText) {
      this.todos.push(this.todoText);
      this.todoText = '';
    }
  }

  removeTodo(todoIndex: number) {
    this.todos.splice(todoIndex, 1);
  }

  editTodo(todoIndex: number) {
    this.isEditMode = true;
    this.todoText = this.todos[todoIndex];
    this.todoUpdateIndex = todoIndex;
  }

  updateTodo() {
    if (this.isEditMode && this.todoText) {
      this.todos[this.todoUpdateIndex] = this.todoText;
      this.todoText = '';
      this.isEditMode = false;
      this.todoUpdateIndex = -1;
    } else {
      alert('Bitte einen Text hinterlegen!');
    }
  }

  clearTodos() {
    this.todos = [];
  }
}
