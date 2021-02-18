import {Component, OnInit} from '@angular/core';
import {EntryModel} from "./entry.model";
import {EntryService} from "./entry.service";

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  entries: EntryModel[] = [];

  constructor(private entryService: EntryService) {
  }

  ngOnInit(): void {
    this.entries = this.entryService.entries;
  }

  delete(entry: EntryModel): void {
    this.entryService.deleteEntry(entry);
  }
}
