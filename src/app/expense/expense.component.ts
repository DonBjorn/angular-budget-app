import {Component, Input, OnInit} from '@angular/core';
import {ExpenseModel} from "./expense.model";
import {ExpenseService} from "./expense.service";

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenses: ExpenseModel[] = [];
  @Input() entriesTotal: number;

  constructor(private expenseService: ExpenseService) {
  }

  ngOnInit(): void {
    this.expenses = this.expenseService.expenses;
  }

  calculatePercentage(expense: ExpenseModel): number{
    return expense.value / this.entriesTotal;
  }

  delete(expense: ExpenseModel): void {
    this.expenseService.delete(expense);
  }
}
