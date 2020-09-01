import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({providedIn: "root"})
export class GiphyService {

    API_URL: string = environment.API_GIPHY;
    API_KEY: string = environment.API_KEY;

    constructor(public http: HttpClient) {
        this.http = http;
    }

    public getTrendingGif(): Observable<any> {
        return this.http.get(`${this.API_URL}/trending?${this.API_KEY}&limit=16&rating=pg`).pipe(map(response => response));
    }

    public getGif(search: string): Observable<any> {
        return this.http.get(`${this.API_URL}/search?${this.API_KEY}&q=${search}&limit=16&offset=0&rating=pg&lang=en`).pipe(map(response => response));
    }
}
