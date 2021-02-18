import { Component, OnInit } from '@angular/core';
import {EntryService} from "../entry/entry.service";
import {ExpenseService} from "../expense/expense.service";
import {EntryModel} from "../entry/entry.model";
import {ExpenseModel} from "../expense/expense.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  type = 'add';
  description = '';
  value: number | null = null;
  constructor(
    private entryService: EntryService,
    private expenseService: ExpenseService
  ) { }

  ngOnInit(): void {
  }

  typeOperation(event: Event): void{
    this.type = (event.target as HTMLInputElement).value;
  }

  addValue(): void{
    if (this.description === '' || this.value === null){
      alert('Llena los datos');
    }else{
      if (this.type === 'add'){
        this.entryService.entries.push(new EntryModel(this.description, this.value));
      }else{
        this.expenseService.expenses.push(new ExpenseModel(this.description, this.value));
      }
      this.description = '';
      this.value = null;
    }
  }
}
