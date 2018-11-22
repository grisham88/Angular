import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AutoInputWidthDirective } from './auto-input-width.directive';
import { MyuppercasePipe } from './myuppercase.pipe';
import { ListboxComponent } from './listbox/listbox.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AutoInputWidthDirective,
    MyuppercasePipe,
    ListboxComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TodolistComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
