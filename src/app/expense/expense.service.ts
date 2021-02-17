import {ExpenseModel} from "./expense.model";

export class ExpenseService{
  expenses: ExpenseModel[] = [
    new ExpenseModel('Renta', 900),
    new ExpenseModel('Ropa', 200),
  ];
}
