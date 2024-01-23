import { Component } from '@angular/core';

type Item = {
  id: number,
  name: string,
  date: string,
  status: boolean,
}

@Component({
  selector: 'app-component',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
})

export class AppComponent {

  items?: Item[];

  constructor() {
    this.initStorage();
  }

  private initStorage(): void {
    let rowsVal = localStorage.getItem('rows');
    rowsVal ? this.items = JSON.parse(rowsVal) : null;

    if (!rowsVal) {
      this.items = [];
      localStorage.setItem('rows', JSON.stringify(this.items));
    }
  }

  getLastId() {
    const getItem = localStorage.getItem('rows');
    if (getItem) {
      let rows = JSON.parse(getItem);
      if (rows.length < 1) {
        return 0;
      }
      return rows[rows.length - 1].id + 1;
    }
  }

  readStorage(): void {
    const getItem = localStorage.getItem('rows');
    getItem ? this.items = JSON.parse(getItem) : null;
  }

  addRow() {
    const lastId = this.getLastId();
    this.items?.push({ id: lastId, name: '', date: new Date().toLocaleString(), status: false });
    localStorage.setItem('rows', JSON.stringify(this.items));
  }

  deleteRowById(rowId: number): void {
    const getItem = localStorage.getItem('rows');
    if (getItem) {
      let rows = JSON.parse(getItem);
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].id === rowId) {
          rows.splice(i, 1);
          break;
        }
      }
      localStorage.setItem('rows', JSON.stringify(rows));
      this.readStorage();
    }
  }
}