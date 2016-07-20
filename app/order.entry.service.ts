import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {OrderEntry, EntryRepeat} from "./order.entry";
import * as _ from 'lodash';

@Injectable()
export class OrderEntryService {
    private orderEntriesUrl = 'app/orderentries';  // URL to web api

    constructor(private http: Http) { }

    getOrderEntries(): Promise<OrderEntry[]> {
        return this.http.get(this.orderEntriesUrl)
            .toPromise()
            // .then(response => response.json().data)
            .then(this.createOrderEntries)
            .catch(this.handleError);
    }

    getOrderEntryRepeats() {
        return Object.keys(EntryRepeat).map(k => EntryRepeat[k]).filter(v => typeof v === "string");
    }

    private createOrderEntries(response: Response) {
        let result: OrderEntry[] = [];


        _.each(response.json().data, function (item:any) {
            result.push(OrderEntry.fromJson(item));
        });
        return result;
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}