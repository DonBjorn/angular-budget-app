import {ExpenseModel} from "./expense.model";

export class ExpenseService{
  expenses: ExpenseModel[] = [
    new ExpenseModel('Renta', 900),
    new ExpenseModel('Ropa', 200),
  ];

  delete(expense: ExpenseModel): void {
    const index = this.expenses.indexOf(expense);
    this.expenses.splice(index, 1);
  }
}
