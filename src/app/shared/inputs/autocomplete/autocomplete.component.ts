import {Component} from "@angular/core";
import {CompanyService} from "../../../services/company/company.service";
import {Observable} from "rxjs";
import {Result} from "../../models/result.model";

@Component({
    selector: 'app-autocomplete',
    templateUrl: 'autocomplete.component.html',
    styleUrls: ['autocomplete.component.scss'],
})
export class AutocompleteComponent {

    public options: Observable<Result[]>
    public isOpen = false;

    public set inscription(newInscription: string) {
        this.onInscriptionChange(newInscription);
    }

    public get inscription(): string {
        return this._inscription;
    }

    private _inscription = '';


    constructor (private companyService : CompanyService,
    ) {}

    close(): void {
        this.isOpen = false;
    }

    open(): void {
        if (this.canOpen()) this.isOpen = true;
    }


    toggle(): false {
        if (this.isOpen) {
            this.close();

        } else {
            this.open();
        }
        return false;
    }

    onInscriptionChange(value: string): void {
        this.isOpen = true;
        this._inscription = value;
    }

    onChange(text: string):void {
        this.options = this.companyService.request(text);
    }

    private canOpen(): boolean {
        return !this.isOpen;
    }
}