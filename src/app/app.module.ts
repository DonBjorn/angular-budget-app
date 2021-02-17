import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EntryComponent } from './entry/entry.component';
import { ExpenseComponent } from './expense/expense.component';
import { FormComponent } from './form/form.component';
import {EntryService} from "./entry/entry.service";
import {ExpenseService} from "./expense/expense.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntryComponent,
    ExpenseComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [EntryService, ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
