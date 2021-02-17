import {EntryModel} from "./entry.model";

export class EntryService{
  entries: EntryModel[] = [
    new EntryModel('Sueldo', 4000),
    new EntryModel('Venta Auto', 500), ];
}
