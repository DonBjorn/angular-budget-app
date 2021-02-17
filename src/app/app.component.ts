import { Component } from '@angular/core';
import {EntryModel} from "./entry/entry.model";
import {ExpenseModel} from "./expense/expense.model";
import {ExpenseService} from "./expense/expense.service";
import {EntryService} from "./entry/entry.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  entries: EntryModel[] = [];
  expenses: ExpenseModel[] = [];

  constructor(
    private entryService: EntryService,
    private expenseService: ExpenseService
  ) {
    this.entries = entryService.entries;
    this.expenses = expenseService.expenses;
  }

  getEntriesTotal(): number{
    let entriesTotal = 0;
    this.entries.forEach((entry) => {
      entriesTotal += entry.value;
    });
    return entriesTotal;
  }

  getExpensesTotal(): number{
    let expensesTotal = 0;
    this.expenses.forEach((entry) => {
      expensesTotal += entry.value;
    });
    return expensesTotal;
  }

  getPercentageTotal(): number{
    return this.getExpensesTotal() / this.getEntriesTotal();
  }

  getBudgetTotal(): number{
    return this.getEntriesTotal() - this.getEntriesTotal();
  }
}
