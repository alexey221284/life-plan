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

    items: Item[] | undefined;

    constructor() {
        this.initStorage();
    }

    private initStorage(): void {
        let rowsVal = localStorage.getItem("rows");
        // @ts-ignore
        this.items = JSON.parse(rowsVal);

        if (!rowsVal) {
            this.items = [];
            localStorage.setItem("rows", JSON.stringify(this.items));
        }
    }

    getLastId() {
        const getItem = localStorage.getItem("rows");
        let rows = JSON.parse(getItem);
        if (rows.length < 1) {
            return 0;
        }
        return rows[rows.length-1].id + 1;
    }

    readStorage(): void {
        this.items = JSON.parse(localStorage.getItem("rows"))
    }

    addRow() {
        const lastId = this.getLastId();
        this.items?.push({ id: lastId, name: '', date: new Date().toLocaleString(), status: false})
        localStorage.setItem("rows", JSON.stringify(this.items));
    }

    deleteRowById(rowId: number): void {
        let rows = JSON.parse(localStorage.getItem("rows"));
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].id === rowId) {
                rows.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("rows", JSON.stringify(rows));
        this.readStorage();
    }
}