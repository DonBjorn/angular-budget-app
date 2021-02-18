import {EntryModel} from "./entry.model";

export class EntryService{
  entries: EntryModel[] = [
    new EntryModel('Sueldo', 4000),
    new EntryModel('Venta Auto', 500), ];

  deleteEntry(entry: EntryModel): void {
    const index: number = this.entries.indexOf(entry);
    this.entries.splice(index, 1);
  }
}
