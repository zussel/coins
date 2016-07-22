"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var order_entry_1 = require("./order-entry");
var _ = require('lodash');
var OrderEntryService = (function () {
    function OrderEntryService(http) {
        this.http = http;
        this.orderEntriesUrl = 'app/orderentries'; // URL to web api
    }
    OrderEntryService.prototype.getOrderEntries = function () {
        return this.http.get(this.orderEntriesUrl)
            .toPromise()
            .then(this.createOrderEntries)
            .catch(this.handleError);
    };
    OrderEntryService.prototype.getOrderEntry = function (id) {
        return this.getOrderEntries()
            .then(function (orderEntries) { return orderEntries.find(function (orderEntry) { return orderEntry.id === id; }); });
    };
    OrderEntryService.prototype.save = function (orderEntry) {
        if (orderEntry.id) {
            return this.put(orderEntry);
        }
        return this.post(orderEntry);
    };
    // Add new Hero
    OrderEntryService.prototype.post = function (orderEntry) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.orderEntriesUrl, JSON.stringify(orderEntry), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update existing Hero
    OrderEntryService.prototype.put = function (orderEntry) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.orderEntriesUrl + "/" + orderEntry.id;
        return this.http
            .put(url, JSON.stringify(orderEntry), { headers: headers })
            .toPromise()
            .then(function () { return orderEntry; })
            .catch(this.handleError);
    };
    OrderEntryService.prototype.delete = function (orderEntry) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.orderEntriesUrl + "/" + orderEntry.id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    OrderEntryService.prototype.getOrderEntryRepeats = function () {
        return Object.keys(order_entry_1.EntryRepeat).map(function (k) { return order_entry_1.EntryRepeat[k]; }).filter(function (v) { return typeof v === "string"; });
    };
    OrderEntryService.prototype.createOrderEntries = function (response) {
        var result = [];
        _.each(response.json().data, function (item) {
            result.push(order_entry_1.OrderEntry.fromJson(item));
        });
        return result;
    };
    OrderEntryService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    OrderEntryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrderEntryService);
    return OrderEntryService;
}());
exports.OrderEntryService = OrderEntryService;
//# sourceMappingURL=order-entry.service.js.map