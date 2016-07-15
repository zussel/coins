import moment = require("moment/moment");
import * as _ from 'lodash';

export enum EntryRepeat {
    Once,
    Weekly,
    TwoWeekly,
    Monthly,
    TwoMonthly,
    QuaterYearly,
    HalfYearly,
    Yearly
}

export enum EntryType {
    Income,
    Insurrance,
    Credit,
    AdditionalCosts,
    Fuel
}

export class OrderEntryRange {
    constructor(value: number, from: moment.Moment = moment(), to: moment.Moment = null) {
        this.value = value;
        this.from = from;
        this.to = to;
    }

    from: moment.Moment;
    to: moment.Moment;
    value: number;
}

export class OrderEntry {
    // id: number;
    public static fromJson(json: any): OrderEntry {
        json.created = moment(json.created);
        _.each(json.ranges, function (range:any) {
            range.from = moment(range.from);
            range.to = moment(range.to);
        });
        return json;
    }

    type: EntryType;
    title: string;
    description: string;
    created: moment.Moment;
    estimated: boolean;
    repeat: EntryRepeat;
    ranges: OrderEntryRange[] = [];
}
