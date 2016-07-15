import { OrderEntry, OrderEntryRange, EntryType, EntryRepeat } from './order.entry'

import moment = require("moment/moment");

export class InMemoryDataService {
    createDb() {
        let orderentries:OrderEntry[] = [{
            "type": EntryType.Income,
            "title": "Income",
            "description": "",
            "created": moment(),
            "estimated": false,
            "repeat": EntryRepeat.Monthly,
            "ranges": [new OrderEntryRange(2500, moment("2016-01-01"))]
        }, {
            "type": EntryType.Insurrance,
            "title": "House",
            "description": "",
            "created": moment(),
            "estimated": false,
            "repeat": EntryRepeat.Yearly,
            "ranges": [new OrderEntryRange(-250, moment("2016-07-15"))]
        }, {
            "type": EntryType.Credit,
            "title": "House",
            "description": "",
            "created": moment(),
            "estimated": false,
            "repeat": EntryRepeat.Monthly,
            "ranges": [new OrderEntryRange(-800, moment("2016-01-01"))]
        }, {
            "type": EntryType.AdditionalCosts,
            "title": "Water",
            "description": "",
            "created": moment(),
            "estimated": false,
            "repeat": EntryRepeat.QuaterYearly,
            "ranges": [new OrderEntryRange(-30, moment("2016-01-06"))]
        }, {
            "type": EntryType.AdditionalCosts,
            "title": "Power",
            "description": "",
            "created": moment(),
            "estimated": false,
            "repeat": EntryRepeat.Monthly,
            "ranges": [new OrderEntryRange(-100, moment("2016-01-15"))]
        }];
        return {orderentries};
    }
}
