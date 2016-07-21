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
var core_1 = require("@angular/core");
var _ = require('lodash');
var order_entry_1 = require("./order-entry");
var moment = require("moment/moment");
var OrderEntryEstimateService = (function () {
    function OrderEntryEstimateService() {
    }
    Object.defineProperty(OrderEntryEstimateService, "MONTHS", {
        get: function () { return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; },
        enumerable: true,
        configurable: true
    });
    ;
    OrderEntryEstimateService.prototype.estimateYear = function (year, orderEntries) {
        var self = this;
        var estimations = [];
        _.each(OrderEntryEstimateService.MONTHS, function (month) {
            var estimation = { earnings: 0, expenses: 0 };
            _.each(orderEntries, function (orderEntry) {
                // find valid range
                var value = self.calculateEstimateForMonth(year, month, orderEntry);
                if (value < 0) {
                    estimation.expenses -= value;
                }
                else {
                    estimation.earnings += value;
                }
            });
            estimations.push(estimation);
        });
        return estimations;
    };
    OrderEntryEstimateService.prototype.calculateEstimateForMonth = function (year, month, orderEntry) {
        // find fitting range
        var self = this;
        var date = moment({ year: year, month: month });
        var range = _.find(orderEntry.ranges, function (r) {
            if (r.to.isValid()) {
                return date.isBetween(r.from, r.to, 'month', '[)') && self.matchesRepeat(r, date, orderEntry.repeat);
            }
            else {
                return date.isSameOrAfter(r.from, 'month') && self.matchesRepeat(r, date, orderEntry.repeat);
            }
        });
        if (range) {
            return range.value;
        }
        return 0;
    };
    OrderEntryEstimateService.prototype.matchesRepeat = function (range, date, repeat) {
        switch (repeat) {
            case order_entry_1.EntryRepeat.Once:
                return date.isSame(range.from, 'month');
            case order_entry_1.EntryRepeat.Weekly:
                return false;
            case order_entry_1.EntryRepeat.TwoMonthly:
                return false;
            case order_entry_1.EntryRepeat.Monthly:
                return true;
            case order_entry_1.EntryRepeat.TwoMonthly:
                return (date.month() - range.from.month()) % 2 === 0;
            case order_entry_1.EntryRepeat.QuaterYearly:
                return (date.month() - range.from.month()) % 3 === 0;
            case order_entry_1.EntryRepeat.HalfYearly:
                return (date.month() - range.from.month()) % 6 === 0;
            case order_entry_1.EntryRepeat.Yearly:
                return (date.month() - range.from.month()) % 12 === 0;
            default: return false;
        }
    };
    OrderEntryEstimateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], OrderEntryEstimateService);
    return OrderEntryEstimateService;
}());
exports.OrderEntryEstimateService = OrderEntryEstimateService;
//# sourceMappingURL=order-entry-estimate.service.js.map