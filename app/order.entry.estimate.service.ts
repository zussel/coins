import {Injectable} from "@angular/core";
import * as _ from 'lodash';

import {OrderEntry, OrderEntryRange, EntryRepeat} from "./order.entry";
import moment = require("moment/moment");

@Injectable()
export class OrderEntryEstimateService {

    private static get MONTHS(): number[] { return [0,1,2,3,4,5,6,7,8,9,10,11] };

    estimateYear(year: number, orderEntries: OrderEntry[]):any {
        let self = this;
        let estimations: any[] = [];
        _.each(OrderEntryEstimateService.MONTHS, function (month:number) {
            let estimation = { earnings: 0, expenses: 0};
            _.each(orderEntries, function (orderEntry:OrderEntry) {
                // find valid range
                let value = self.calculateEstimateForMonth(year, month, orderEntry);
                if (value < 0) {
                    estimation.expenses -= value;
                } else {
                    estimation.earnings += value;
                }
            });
            estimations.push(estimation);
        });
        return estimations;
    }

    private calculateEstimateForMonth(year: number, month: number, orderEntry: OrderEntry) {
        // find fitting range
        let self = this;
        let date = moment({ year: year, month: month});
        let range: OrderEntryRange = _.find(orderEntry.ranges, function (r:OrderEntryRange) {
            if (r.to.isValid()) {
                return date.isBetween(r.from, r.to, 'month', '[)') && self.matchesRepeat(r, date, orderEntry.repeat);
            } else {
                return date.isSameOrAfter(r.from, 'month') && self.matchesRepeat(r, date, orderEntry.repeat);
            }
        });

        if (range) {
            return range.value;
        }
        return 0;
    }

    private matchesRepeat(range: OrderEntryRange, date: moment.Moment, repeat: EntryRepeat) {
        switch (repeat) {
            case EntryRepeat.Once:
                return date.isSame(range.from, 'month');
            case EntryRepeat.Weekly:
                return false;
            case EntryRepeat.TwoMonthly:
                return false;
            case EntryRepeat.Monthly:
                return true;
            case EntryRepeat.TwoMonthly:
                return (date.month() - range.from.month()) % 2 === 0;
            case EntryRepeat.QuaterYearly:
                return (date.month() - range.from.month()) % 3 === 0;
            case EntryRepeat.HalfYearly:
                return (date.month() - range.from.month()) % 6 === 0;
            case EntryRepeat.Yearly:
                return (date.month() - range.from.month()) % 12 === 0;
            default: return false;
        }
    }
}
