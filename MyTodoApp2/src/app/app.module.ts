import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AutoInputWidthDirective } from './auto-input-width.directive';
import { MyuppercasePipe } from './myuppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AutoInputWidthDirective,
    MyuppercasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
