import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {Result} from "../../shared/models/result.model";

@Injectable()
export class CompanyService {

    constructor(private readonly http: HttpClient) {
    }

    request(domen: string): Observable<Result[]> {
        return this.http.get<Result[]>(`https://autocomplete.clearbit.com/v1/companies/suggest?query=:${domen}`);
    }
}