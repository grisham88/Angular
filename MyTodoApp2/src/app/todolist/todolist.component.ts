import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  todoText = '';
  todos: string[] = [];
  isEditMode = false;
  indexTodoUpdate = -1;

  addTodo() {
    if (this.todoText) {
      this.todos.push(this.todoText);
      this.todoText = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  editTodo(index: number) {
    this.indexTodoUpdate = index;
    this.todoText = this.todos[index];
    this.isEditMode = true;
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
