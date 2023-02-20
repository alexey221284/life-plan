import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CompanyService} from "../../../services/company/company.service";
import {AutocompleteComponent} from "./autocomplete.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [AutocompleteComponent],
    providers: [CompanyService],
    exports: [
        AutocompleteComponent
    ]
})

export class AutocompleteModule {}