"use strict";
var moment = require("moment/moment");
var _ = require('lodash');
(function (EntryRepeat) {
    EntryRepeat[EntryRepeat["Once"] = 0] = "Once";
    EntryRepeat[EntryRepeat["Weekly"] = 1] = "Weekly";
    EntryRepeat[EntryRepeat["TwoWeekly"] = 2] = "TwoWeekly";
    EntryRepeat[EntryRepeat["Monthly"] = 3] = "Monthly";
    EntryRepeat[EntryRepeat["TwoMonthly"] = 4] = "TwoMonthly";
    EntryRepeat[EntryRepeat["QuaterYearly"] = 5] = "QuaterYearly";
    EntryRepeat[EntryRepeat["HalfYearly"] = 6] = "HalfYearly";
    EntryRepeat[EntryRepeat["Yearly"] = 7] = "Yearly";
})(exports.EntryRepeat || (exports.EntryRepeat = {}));
var EntryRepeat = exports.EntryRepeat;
(function (EntryType) {
    EntryType[EntryType["Income"] = 0] = "Income";
    EntryType[EntryType["Insurrance"] = 1] = "Insurrance";
    EntryType[EntryType["Credit"] = 2] = "Credit";
    EntryType[EntryType["AdditionalCosts"] = 3] = "AdditionalCosts";
    EntryType[EntryType["Fuel"] = 4] = "Fuel";
})(exports.EntryType || (exports.EntryType = {}));
var EntryType = exports.EntryType;
var OrderEntryRange = (function () {
    function OrderEntryRange(value, from, to) {
        if (from === void 0) { from = moment(); }
        if (to === void 0) { to = null; }
        this.value = value;
        this.from = from;
        this.to = to;
    }
    return OrderEntryRange;
}());
exports.OrderEntryRange = OrderEntryRange;
var OrderEntry = (function () {
    function OrderEntry() {
        this.ranges = [];
    }
    // id: number;
    OrderEntry.fromJson = function (json) {
        json.created = moment(json.created);
        _.each(json.ranges, function (range) {
            range.from = moment(range.from);
            range.to = moment(range.to);
        });
        return json;
    };
    return OrderEntry;
}());
exports.OrderEntry = OrderEntry;
//# sourceMappingURL=order-entry.js.map