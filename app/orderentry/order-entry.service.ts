import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {OrderEntry, EntryRepeat} from "./order-entry";
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

    getOrderEntry(id: number) {
        return this.getOrderEntries()
            .then(orderEntries => orderEntries.find(orderEntry=> orderEntry.id === id));
    }

    save(orderEntry: OrderEntry): Promise<OrderEntry>  {
        if (orderEntry.id) {
            return this.put(orderEntry);
        }
        return this.post(orderEntry);
    }

    // Add new Hero
    private post(orderEntry: OrderEntry): Promise<OrderEntry> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.orderEntriesUrl, JSON.stringify(orderEntry), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Hero
    private put(orderEntry: OrderEntry) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.orderEntriesUrl}/${orderEntry.id}`;

        return this.http
            .put(url, JSON.stringify(orderEntry), {headers: headers})
            .toPromise()
            .then(() => orderEntry)
            .catch(this.handleError);
    }

    delete(orderEntry: OrderEntry) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.orderEntriesUrl}/${orderEntry.id}`;

        return this.http
            .delete(url, {headers: headers})
            .toPromise()
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